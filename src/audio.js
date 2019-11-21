let sounds = {}

sounds.correct = new Audio("./audio/win.wav");
sounds.fail =new Audio("./audio/fail.wav");
sounds.start =new Audio("./audio/startTheme.mp3");
sounds.winEnd = new Audio("./audio/successEnd.mp3");
sounds.failEnd = new Audio("./audio/failEnd.wav");

export let play = sound => {
    if (sounds[sound]) {
        sounds[sound].currentTime = 0;
        sounds[sound].play();
    }
};
export let stop = sound => {
    if (sounds[sound]) {
        sounds[sound].pause();
    }
};