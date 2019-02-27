

var alpha = null;
var beta = null;
var gamma = null;

var interval = 10;

var listening = false;    

var reverb = new Tone.JCReverb(0.4).connect(Tone.Master);
var delay = new Tone.FeedbackDelay(0.5);
var synth =new Tone.DuoSynth().chain(delay, reverb);
var distortion = new Tone.Distortion(0.6)
var tremolo = new Tone.Tremolo().start()

var polySynth = new Tone.PolySynth(4, Tone.Synth).chain(distortion, tremolo, Tone.Master)

document.getElementById("connect").addEventListener("click", function() {
    console.log("Button clicked");

    if (window.DeviceOrientationEvent) {
        console.log("DeviceOrientationEvent supported");
        if (!listening) {
            console.log("Starting orientation capture");
            window.addEventListener('deviceorientation', orientationHandler, false);
        } else {
            console.log("Stopping orientation capture");
            window.removeEventListener('deviceorientation', orientationHandler, false);
        }
        listening = !listening;
    } else {
        console.log("DeviceMotionEvent is not supported.")
    }
});

var orientationHandler = function(event) {
    alpha = event.alpha
    beta = event.beta
    gamma = event.gamma
    document.getElementById("status").innerHTML = "Alpha " + event.alpha + " Beta " + event.beta + " Gamma " + event.gamma;
    if (beta <= -160) {
        polySynth.volume.value = -10
    } else if (beta <= -140 && beta > -160) {
        polySynth.volume.value = -12;
    } else if (beta <= -120 && beta > -140) {
        polySynth.volume.value = -14;
    } else if (beta <= -100 && beta > -120) {
        polySynth.volume.value = -16;
    } else if (beta <= -80 && beta > -100) {
        polySynth.volume.value = -18;
    } else if (beta <= -60 && beta > -80) {
        polySynth.volume.value = -20;
    } else if (beta <= -40 && beta > -60) {
        polySynth.volume.value = -22;
    } else if (beta <= -20 && beta > -40) {
        polySynth.volume.value = -24;
    } else if (beta <= 0 && beta > -20) {
        polySynth.volume.value = -26;
    } else if (beta <= 20 && beta > 0) {
        polySynth.volume.value = -28;
    } else if (beta <= 40 && beta > 20) {
        polySynth.volume.value = -30;
    } else if (beta <= 60 && beta > 40) {
        polySynth.volume.value = -28;
    } else if (beta <= 80 && beta > 60) {
        polySynth.volume.value = -30;
    } else if (beta <= 100 && beta > 80) {
        polySynth.volume.value = -32;
    } else if (beta <= 120 && beta > 100) {
        polySynth.volume.value = -34;
    } else if (beta <= 140 && beta >120) {
        polySynth.volume.value = -36;
    } else if (beta <= 160 && beta > 140) {
        polySynth.volume.value = -38;
    } else if (beta > 160) {
        polySynth.volume.value = -40;
    } else {
        polySynth.volume.value = -42;
    }

    console.log("synth.volume.value: " + synth.volume.value);

    if (gamma <= -70) {
        polySynth.triggerAttackRelease("C4", "32n");
    } else if (gamma <= -60 && gamma > -70) {
        polySynth.triggerAttackRelease("D4", "32n");
    } else if (gamma <= -50 && gamma > -60) {
        polySynth.triggerAttackRelease("E4", "32n");
    } else if (gamma <= -40 && gamma > -50) {
        polySynth.triggerAttackRelease("F4", "32n");
    } else if (gamma <= -30 && gamma > -40) {
        polySynth.triggerAttackRelease("G4", "32n");
    } else if (gamma <= -20 && gamma > -30) {
        polySynth.triggerAttackRelease("A5", "32n");
    } else if (gamma <= -10 && gamma > -20) {
        polySynth.triggerAttackRelease("C5", "32n");
    } else if (gamma <= 0 && gamma > -10) {
        polySynth.triggerAttackRelease("D5", "32n");
    } else if (gamma <= 10 && gamma > 0) {
        polySynth.triggerAttackRelease("E5", "32n");
    } else if (gamma <= 20 && gamma > 10) {
        polySynth.triggerAttackRelease("F5", "32n");
    } else if (gamma <= 30 && gamma > 20) {
        polySynth.triggerAttackRelease("G5", "32n");
    } else if (gamma <= 40 && gamma > 30) {
        polySynth.triggerAttackRelease("A5", "32n");
    } else if (gamma <= 50 && gamma > 40) {
        polySynth.triggerAttackRelease("C6", "32n");
    } else if (gamma <= 60 && gamma > 50) {
        polySynth.triggerAttackRelease("D6", "32n");
    } else if (gamma <= 70 && gamma > 60) {
        polySynth.triggerAttackRelease("E6", "32n");
    } else if (gamma > 70) {
        polySynth.triggerAttackRelease("F6", "32n");
    } else {
        polySynth.triggerAttackRelease("G6", "32n");
    }
};
