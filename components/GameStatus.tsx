
import React from 'react';
import type { GameState, Team } from '../types';

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
          <h1 className="text-6xl font-bold mb-4">Cuộc chiến Lãnh Thổ</h1>
          <p className="text-xl mb-8 max-w-2xl text-gray-300">
            Hai đội sẽ trả lời câu hỏi để chiếm lãnh thổ của đối phương. Trả lời đúng, lãnh thổ của bạn sẽ mở rộng. Đội nào chiếm được toàn bộ màn hình sẽ chiến thắng!
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
          <h1 className="text-8xl font-bold mb-4">KẾT THÚC!</h1>
          {winner ? (
            <h2 className={`text-5xl font-bold mb-8 ${winnerInfo[winner].color}`}>
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
