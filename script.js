var synth = new Tone.Synth().toMaster()

var alpha = null;
var beta = null;
var gamma = null;

var listening = false;

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
    console.log("Detected orientation");
    console.log("alpha: " + event.alpha);
    alpha = event.alpha
    console.log("beta: " + event.beta);
    beta = event.beta
    console.log("gamma: " + event.gamma);
    gamma = event.gamma
    document.getElementById("status").innerHTML = "Alpha " + event.alpha + " Beta " + event.beta + " Gamma " + event.gamma;
    if (alpha > 30) {
        synth.triggerAttackRelease('C4', '64n');
    } else {
        synth.triggerAttackRelease('E6', '64n');
    }
};
