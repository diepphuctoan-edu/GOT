
import React, { useMemo } from 'react';

const CONFETTI_COUNT = 150;
const COLORS = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548'];

const Confetti: React.FC = () => {
  const confettiPieces = useMemo(() => {
    return Array.from({ length: CONFETTI_COUNT }).map((_, i) => {
      const style = {
        left: `${Math.random() * 100}%`,
        backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 3 + 4}s`,
      };
      return <i key={i} style={style} className="confetti-piece"></i>;
    });
  }, []);

  return (
    <div className="confetti-container absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {confettiPieces}
    </div>
  );
};

export default Confetti;
