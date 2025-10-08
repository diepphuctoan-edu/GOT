
export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export type Team = 'blue' | 'orange';

export type GameState = 'idle' | 'playing' | 'finished';
