// A simple sound manager to avoid creating new Audio objects on every play.

const sounds = {
  click: new Audio('https://cdn.jsdelivr.net/gh/ifshizuku/asset/audio/click.mp3'),
  correct: new Audio('https://cdn.jsdelivr.net/gh/ifshizuku/asset/audio/correct.mp3'),
  incorrect: new Audio('https://cdn.jsdelivr.net/gh/ifshizuku/asset/audio/incorrect.mp3'),
  start: new Audio('https://cdn.jsdelivr.net/gh/ifshizuku/asset/audio/start.mp3'),
  timesUp: new Audio('https://cdn.jsdelivr.net/gh/ifshizuku/asset/audio/timesup.mp3'),
  tick: new Audio('https://cdn.jsdelivr.net/gh/ifshizuku/asset/audio/tick.mp3'),
  win: new Audio('https://cdn.jsdelivr.net/gh/ifshizuku/asset/audio/win.mp3'),
};

const backgroundMusic = new Audio('https://cdn.pixabay.com/audio/2022/08/04/audio_2dde64a059.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.25;

// Adjust volumes to be pleasant
sounds.click.volume = 0.7;
sounds.correct.volume = 0.6;
sounds.incorrect.volume = 0.6;
sounds.start.volume = 0.5;
sounds.timesUp.volume = 0.7;
sounds.tick.volume = 0.8;
sounds.win.volume = 0.8;

// Create a single AudioContext to be unlocked.
// This is the most reliable way to handle browser autoplay policies.
const audioContext: AudioContext | null = typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;
let isAudioUnlocked = false;

/**
 * This function MUST be called from a user-initiated event (e.g., a click)
 * to unlock the browser's audio autoplay policy. It resumes the AudioContext
 * if it's in a suspended state.
 */
export const unlockAudio = () => {
  if (audioContext && !isAudioUnlocked && audioContext.state === 'suspended') {
    audioContext.resume().then(() => {
      console.log('AudioContext resumed successfully!');
      isAudioUnlocked = true;
    }).catch((e: Error) => {
        console.error('Failed to resume AudioContext:', e);
    });
  } else {
    isAudioUnlocked = true;
  }
};


export const playSound = (soundName: keyof typeof sounds) => {
  if (!isAudioUnlocked) {
    // Attempt to unlock audio automatically if not done yet. This is a fallback.
    unlockAudio();
  }
  try {
    const sound = sounds[soundName];
    sound.currentTime = 0;
    sound.play().catch(error => {
      console.warn(`Could not play sound '${soundName}'. It might be because the user hasn't interacted with the page yet.`, error);
    });
  } catch (error) {
    console.error(`Error playing sound '${soundName}':`, error);
  }
};

export const playBackgroundMusic = () => {
    if (!isAudioUnlocked) {
        unlockAudio();
    }
    backgroundMusic.currentTime = 0;
    backgroundMusic.play().catch(error => {
        console.warn('Background music failed to play. It might be because the user has not interacted with the page yet.', error);
    });
};

export const stopBackgroundMusic = () => {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
};
