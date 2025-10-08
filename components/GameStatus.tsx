import React from 'react';
import type { GameState, Team } from '../types';
import Confetti from './Confetti';

interface GameStatusProps {
  gameState: GameState;
  winner: Team | null;
  onStart: () => void;
}

const GameStatus: React.FC<GameStatusProps> = ({ gameState, winner, onStart }) => {
  if (gameState === 'playing') return null;

  const winnerInfo = {
    blue: {
      name: 'ĐỘI XANH',
      color: 'text-blue-400',
    },
    orange: {
      name: 'ĐỘI CAM',
      color: 'text-orange-400',
    },
  };

  return (
    <div className="absolute inset-0 bg-black/80 z-30 flex flex-col justify-center items-center text-center p-8">
      {gameState === 'idle' && (
        <>
          <h1 className="text-6xl font-bold mb-4">Cuộc chiến Vương quyền</h1>
          <p className="text-xl mb-8 max-w-2xl text-gray-300">
            Hai đội sẽ trả lời câu hỏi để tranh giành vương quyền. Trả lời đúng, lãnh thổ của bạn sẽ mở rộng. Đội nào chiếm được toàn bộ màn hình sẽ lên ngôi vương!
          </p>
          <button
            onClick={onStart}
            className="px-12 py-4 bg-green-600 text-white font-bold text-2xl rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            BẮT ĐẦU
          </button>
        </>
      )}

      {gameState === 'finished' && (
        <>
          {winner && <Confetti />}
          <h1 className="text-8xl font-bold mb-4">KẾT THÚC!</h1>
          {winner ? (
            <h2 className={`text-5xl font-bold mb-8 ${winnerInfo[winner].color}`}>
              <span role="img" aria-label="crown" className="mr-4">👑</span>
              {winnerInfo[winner].name} THẮNG!
            </h2>
          ) : (
            <h2 className="text-5xl font-bold mb-8 text-yellow-400">
              HÒA! Lãnh thổ bằng nhau.
            </h2>
          )}
          <button
            onClick={onStart}
            className="px-12 py-4 bg-indigo-600 text-white font-bold text-2xl rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            CHƠI LẠI
          </button>
        </>
      )}
    </div>
  );
};

export default GameStatus;