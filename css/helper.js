l = console.log;
function timer(seconds = 20, timeUpCallback, playAudio = false) {
    l('timeUpCallback: ' + timeUpCallback);
    let timerElem = document.getElementById("timer");

    let e = new Date(new Date().getTime() + (1000 * seconds));

    if (timerElem != undefined) {

        showCountDown(e, timeUpCallback, playAudio);
        let audio = document.getElementById("startAudio");
        if (audio != undefined && playAudio)
            audio.play();

    }
    else
        l("no timer element found!")

}

function showCountDown(e, timeUpCallback, playAudio) {
    l('timeUpCallback: ' + timeUpCallback);
    let d = new Date();
    let diff = e.getTime() - d.getTime();
    l(diff);
    l(d);
    l(e)
    let startAudio = document.getElementById("startAudio");
    let endAudio = document.getElementById("endAudio");

    if (diff >= 0) {
        if (startAudio != undefined && playAudio)
        {
            startAudio.muted = false;
            startAudio.play();
            l('playing audio');
        }
            

        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.round((diff % (1000 * 60)) / 1000);

        document.getElementById("min").innerHTML
            = minutes.toString().padStart(2, '0');

        document.getElementById("sec").innerHTML
            = seconds.toString().padStart(2, '0');

        l(seconds.toString().padStart(2, '0'));

        setTimeout(showCountDown, 1000, e, timeUpCallback, playAudio);
    }
    else {
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";

        if (startAudio != undefined && playAudio)
        {
            startAudio.muted = true;
            startAudio.pause();
            l('playing audio');
        }

        
        if (endAudio != undefined && playAudio)
        {
            endAudio.muted = false;
            l('playing other audio');
            endAudio.play();
        }
        l('timeUpCallback: ' + timeUpCallback);
        
        if(timeUpCallback != undefined && timeUpCallback != null)
            timeUpCallback();
            
    }
}