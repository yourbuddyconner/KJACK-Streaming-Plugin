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
            console.log("play button pushed BEEP BOOP");
            ControllerPlayer.playPause();
        }
    }, false);
    
    window.addEventListener('click', function(event) {
	    //call bitton
	    if (event.target === ViewPlayer.callButton
	    	|| event.target === ViewPlayer.callButtonText
	    	|| event.target === ViewPlayer.callButtonPic) {
		    console.log("call button pushed! Heck yes.");
		    alert("call '(928)523-4554' to talk to KJACK!");
	    }
    }, false);
    