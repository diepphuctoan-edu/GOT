import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { Team, GameState, Question } from './types';
import { boCauHoi } from './data/questions';
import Territory from './components/Territory';
import QuestionDisplay from './components/QuestionDisplay';
import GameStatus from './components/GameStatus';
import { playSound, playBackgroundMusic, stopBackgroundMusic, unlockAudio } from './utils/sounds';

const TERRITORY_STEP = 10;
const INITIAL_WIDTH = 50;
const COUNTDOWN_SECONDS = 10;

// Helper function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default function App() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [blueWidth, setBlueWidth] = useState<number>(INITIAL_WIDTH);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(COUNTDOWN_SECONDS);
  const [winner, setWinner] = useState<Team | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);

  const orangeWidth = 100 - blueWidth;
  const currentQuestion = useMemo(() => shuffledQuestions[currentQuestionIndex], [shuffledQuestions, currentQuestionIndex]);

  useEffect(() => {
    if (gameState === 'finished') {
      stopBackgroundMusic();
    }
  }, [gameState]);

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex + 1 < shuffledQuestions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setTimeLeft(COUNTDOWN_SECONDS);
      setAnswered(false);
    } else {
      // Out of questions
      if (blueWidth > orangeWidth) setWinner('blue');
      else if (orangeWidth > blueWidth) setWinner('orange');
      // if equal, it's a draw, winner is null
      setGameState('finished');
    }
  }, [currentQuestionIndex, shuffledQuestions.length, blueWidth, orangeWidth]);

  useEffect(() => {
    if (gameState === 'playing' && !answered) {
      if (timeLeft > 0) {
        if (timeLeft <= 3) {
          playSound('tick');
        }
        const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timerId);
      } else {
        // Time's up, move to next question without changing territory
        playSound('timesUp');
        nextQuestion();
      }
    }
  }, [gameState, timeLeft, nextQuestion, answered]);

  const checkWinner = useCallback((newBlueWidth: number) => {
    if (newBlueWidth >= 100) {
      setBlueWidth(100);
      setWinner('blue');
      setGameState('finished');
      playSound('win');
      return true;
    }
    if (newBlueWidth <= 0) {
      setBlueWidth(0);
      setWinner('orange');
      setGameState('finished');
      playSound('win');
      return true;
    }
    return false;
  }, []);

  const handleAnswer = (selectedOption: string, team: Team) => {
    if (answered || gameState !== 'playing') return;

    playSound('click');
    setAnswered(true);

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    if (isCorrect) {
      playSound('correct');
      let newBlueWidth = blueWidth;
      if (team === 'blue') {
        newBlueWidth += TERRITORY_STEP;
      } else {
        newBlueWidth -= TERRITORY_STEP;
      }

      setBlueWidth(newBlueWidth);
      if (checkWinner(newBlueWidth)) return;
    } else {
      playSound('incorrect');
    }
    
    // Show result briefly before moving to next question
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  };

  const startGame = async () => {
    // This is the most crucial part: unlock audio on the first user interaction.
    await unlockAudio();
    
    playSound('start');
    setTimeout(() => {
      playBackgroundMusic();
    }, 3000);
    setBlueWidth(INITIAL_WIDTH);
    setCurrentQuestionIndex(0);
    setShuffledQuestions(shuffleArray(boCauHoi));
    setTimeLeft(COUNTDOWN_SECONDS);
    setWinner(null);
    setGameState('playing');
    setAnswered(false);
  };
  
  return (
    <main className="relative w-screen h-screen overflow-hidden flex flex-col bg-gray-900">
      <header className="flex-shrink-0 w-full p-4 bg-gray-800/50 backdrop-blur-sm z-20">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-400">ĐỘI XANH</h1>
          <h1 className="text-3xl font-bold tracking-wider">CUỘC CHIẾN VƯƠNG QUYỀN</h1>
          <h1 className="text-2xl font-bold text-orange-400">ĐỘI CAM</h1>
        </div>
      </header>

      <div className="flex-grow w-full flex">
        <Territory
          team="blue"
          width={blueWidth}
          options={currentQuestion?.options || []}
          onAnswer={handleAnswer}
          disabled={gameState !== 'playing' || answered}
        />
        <Territory
          team="orange"
          width={orangeWidth}
          options={currentQuestion?.options || []}
          onAnswer={handleAnswer}
          disabled={gameState !== 'playing' || answered}
        />
      </div>

      {gameState === 'playing' && currentQuestion && (
        <QuestionDisplay
          questionText={currentQuestion.question}
          timeLeft={timeLeft}
        />
      )}
      
      {gameState !== 'playing' && (
        <GameStatus gameState={gameState} winner={winner} onStart={startGame} />
      )}
    </main>
  );
}