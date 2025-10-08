
import React from 'react';
import type { Team } from '../types';

interface TerritoryProps {
  team: Team;
  width: number;
  options: string[];
  onAnswer: (selectedOption: string, team: Team) => void;
  disabled: boolean;
}

const Territory: React.FC<TerritoryProps> = ({ team, width, options, onAnswer, disabled }) => {
  const teamConfig = {
    blue: {
      bg: 'bg-[#ADD8E6]',
      hoverBg: 'hover:bg-blue-400',
      textColor: 'text-blue-900',
      borderColor: 'border-blue-700',
      buttonBg: 'bg-blue-500/80',
    },
    orange: {
      bg: 'bg-[#FFDAB9]',
      hoverBg: 'hover:bg-orange-400',
      textColor: 'text-orange-900',
      borderColor: 'border-orange-700',
      buttonBg: 'bg-orange-500/80',
    },
  };

  const config = teamConfig[team];

  return (
    <div
      className={`h-full ${config.bg} transition-all duration-700 ease-in-out flex flex-col justify-center items-center p-8`}
      style={{ flexBasis: `${width}%` }}
    >
      <div className="w-full max-w-md space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option, team)}
            disabled={disabled}
            className={`w-full p-4 rounded-xl text-lg font-bold ${config.textColor} ${config.buttonBg} ${config.borderColor} border-b-4
              transition-transform transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
              ${!disabled ? `${config.hoverBg} hover:text-white` : ''}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Territory;
