/*
    Where all the javascript files functions are called from.
*/
// code that happens during or before the loading
(function () {
    // flag for testing connection
    window.isConnected;
    
    // body font size so the rest of the text works
    //Layout.setBodyFontSize(document.body.clientHeight);

    /*
    // if we are on Android 3 or below, it does not support svg
    if (!Layout.svgSupported) {
        MainView.logo.src = Layout.images.logo.src;
    }
    */

})();

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

    // window resize event
    window.addEventListener('resize', function () {
        // changes font size of the body so the text resizes
        Layout.setBodyFontSize(document.body.clientHeight);
    }, false);
    
    // events for internet connection
    window.addEventListener('online', function () {
        window.isConnected = true;
    }, false);
    
    window.addEventListener('offline', function () {
        window.isConnected = false;
    }, false);
}