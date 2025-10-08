// A simple sound manager to avoid creating new Audio objects on every play.

const sounds = {
  click: new Audio('https://files.catbox.moe/8twlhh.mp3'),
  correct: new Audio('https://files.catbox.moe/6mpe62.mp3'),
  incorrect: new Audio('https://files.catbox.moe/bhb7ra.mp3'),
  start: new Audio('https://files.catbox.moe/tpddkr.mp3'),
  timesUp: new Audio('https://files.catbox.moe/9ic46d.mp3'),
  tick: new Audio('https://files.catbox.moe/6mpe62.mp3'),
  win: new Audio('https://files.catbox.moe/9sccbz.mp3'),
};

const backgroundMusic = new Audio('https://files.catbox.moe/g7ao3u.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.1;

// Adjust volumes to be pleasant
sounds.click.volume = 0.5;
sounds.correct.volume = 0.4;
sounds.incorrect.volume = 0.4;
sounds.start.volume = 0.3;
sounds.timesUp.volume = 0.5;
sounds.tick.volume = 0.4;
sounds.win.volume = 0.4;

// Create a single AudioContext to be unlocked.
// This is the most reliable way to handle browser autoplay policies.
const audioContext: AudioContext | null = typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;
let isAudioUnlocked = false;

/**
 * This function MUST be called from a user-initiated event (e.g., a click)
 * to unlock the browser's audio autoplay policy. It resumes the AudioContext
 * if it's in a suspended state.
 */
export const unlockAudio = async () => {
  if (isAudioUnlocked || !audioContext) {
    isAudioUnlocked = true;
    return;
  }
  if (audioContext.state === 'suspended') {
    try {
      await audioContext.resume();
      console.log('AudioContext resumed successfully!');
      isAudioUnlocked = true;
    } catch (e: unknown) {
        console.error('Failed to resume AudioContext:', e);
    }
  } else {
    // If context is already running, we're good.
    isAudioUnlocked = true;
  }
};


export const playSound = (soundName: keyof typeof sounds) => {
  if (!isAudioUnlocked) {
    console.warn(`Audio not unlocked yet. Call unlockAudio() from a user event first.`);
    return;
  }
  try {
    const sound = sounds[soundName];
    sound.currentTime = 0;
    sound.play().catch(error => {
      // This catch is a safeguard, but the primary unlock should prevent this.
      console.warn(`Could not play sound '${soundName}'. Autoplay might be blocked.`, error);
    });
  } catch (error) {
    console.error(`Error playing sound '${soundName}':`, error);
  }
};

export const playBackgroundMusic = () => {
    if (!isAudioUnlocked) {
        console.warn(`Audio not unlocked yet. Call unlockAudio() from a user event first.`);
        return;
    }
    backgroundMusic.currentTime = 0;
    backgroundMusic.play().catch(error => {
        console.warn('Background music failed to play. Autoplay might be blocked.', error);
    });
};

export const stopBackgroundMusic = () => {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
};