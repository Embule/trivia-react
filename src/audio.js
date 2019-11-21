let sounds = {}

sounds.correct = new Audio("./audio/win.wav");
sounds.fail =new Audio("./audio/fail.wav");

export let play = sound => {
    if (sounds[sound]) {
        sounds[sound].currentTime = 0;
        sounds[sound].play();
    }
};