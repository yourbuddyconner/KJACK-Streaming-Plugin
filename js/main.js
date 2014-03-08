/*
    Where all the javascript files functions are called from.
*/
    // inits the objects 
    ControllerPlayer.init();

    window.addEventListener('click', function (event) {
        // play button
        if (event.target === ViewPlayer.playPauseButton
            || event.target === ViewPlayer.playPauseButtonIcon 
            || event.target === ViewPlayer.streamStatus) {
            console.log("play button pushed");
            ControllerPlayer.playPause();
        }
    }, false);
    