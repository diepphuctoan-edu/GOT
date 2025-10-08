import React from 'react';

interface QuestionDisplayProps {
  questionText: string;
  timeLeft: number;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ questionText, timeLeft }) => {
  const timerColor = timeLeft <= 3 ? 'text-red-500' : 'text-yellow-300';
  const timerSize = timeLeft <= 3 ? 'scale-125' : 'scale-100';

  return (
    <>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl z-10">
        <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-600 w-full">
          <h2 className="text-3xl font-bold text-center text-white leading-relaxed">
            {questionText}
          </h2>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className={`w-24 h-24 rounded-full bg-gray-900/90 flex items-center justify-center border-4 ${timeLeft <= 3 ? 'border-red-500' : 'border-yellow-300'} shadow-lg transition-transform duration-300 ${timerSize}`}>
          <span className={`text-5xl font-bold ${timerColor} transition-colors duration-300`}>
            {timeLeft}
          </span>
        </div>
      </div>
    </>
  );
};

export default QuestionDisplay;