/*
    Player Controller object
    
    functions: init, playPause, audioStreamPicker
*/

var ControllerPlayer = (function () {
    var self = this;

    // flags
    var isPlaying = false;
    var isError = false;

    // dom objects
    var radioStream = document.getElementById('streamaudio');
    var button = ViewPlayer.playPauseButtonIcon;
    var streamStatus = ViewPlayer.streamStatus;

    // images
    //var playImage = Layout.images.buttonPlay();
    //var pauseImage = Layout.images.buttonPause();

    // picks between the 2 stream sources
    var audioStreamPicker = function () {
        /*if (window.isConnected === false) {
            return false;
        }*/

        var isStream64 = true;
        var isStream128 = true;
        var stream64 = 'http://commsrv8.comm.nau.edu:8000/kjack-64k';
        var stream128 = 'http://commsrv8.comm.nau.edu:8000/kjack';
        // try the 64bit stream
        try {
            radioStream.src = stream64;
        } catch (e) {
            // could not find the stream
            console.log(e.name + ' ' + e.message);
            isStream64 = false;
        }
        if (isStream64) {
            // stream found
            return true;
        }

        // try the 128bit stream
        try {
            radioStream.src = stream128;
        } catch (e) {
            // could not find the stream
            console.log(e.name + ' ' + e.message);
            isStream128 = false;
        }

        if (isStream128) {
            // stream found
            return true;
        }

        // no streams found which probably means there is no connection
        return false;
    };

    return {
        init: function () {


            // sets the audio source to the KJACK radio stream
            if (!audioStreamPicker()) {
                ViewMain.DOMDataReplacer(streamStatus, 'Play');
                // show error message
                navigator.notification.alert(
                    'Could not connect to the KJACK radio station.', // message

                function () {}, // callback
                'No Radio', // title
                'Done' // buttonName
                );
            }

            //
            //    the HTML5 audio tag events
            //

            // error
            radioStream.addEventListener("error", function () {
                // tries a different stream if the first one does not work
                if (!audioStreamPicker()) {
                    ViewMain.DOMDataReplacer(streamStatus, 'Play');
                    // show error message
                    navigator.notification.alert(
                        'Could not connect to the KJACK radio station.', // message

                    function () {}, // callback
                    'No Radio', // title
                    'Done' // buttonName
                    );
                    button.className = 'play';
                    self.isError = true;
                    console.log("Error");
                }
            }, false);

            // waits for the stream to buffer then plays
            radioStream.addEventListener("canplay", function () {
                if (isPlaying) {
                    ViewMain.DOMDataReplacer(streamStatus, 'Playing');
                    radioStream.play();
                }
                console.log("Can Play");
            }, false);

            // let's us know that the stream is playing
            radioStream.addEventListener("playing", function () {
                if (isPlaying) {
                    isError = false;
                    ViewMain.DOMDataReplacer(streamStatus, 'Playing');
                    console.log("Playing");
                }
            }, false);

            // pause event
            radioStream.addEventListener("pause", function () {
                ViewMain.DOMDataReplacer(streamStatus, 'Paused');
                console.log("Paused");
                isPlaying = false;
            }, false);

            // buffering event
            radioStream.addEventListener("stalled", function () {
                if (isPlaying) {
                    ViewMain.DOMDataReplacer(streamStatus, 'Buffering');
                    console.log("Buffering");
                }
            }, false);

            // let's us know that we are waiting on the stream to load
            radioStream.addEventListener("waiting", function () {
                if (isPlaying) {
                    ViewMain.DOMDataReplacer(streamStatus, 'Buffering');
                    console.log("Waiting");
                }
            }, false);

        },
        playPause: function () {
            // if there was an error, try to get the audio stream
            if (isError) {
                self.radioStream.load();
                console.log("Attempting to load");
            }

            // play the stream
            if (radioStream.paused) {
                //statusLabelText.innerHTML = 'Loading';
                button.className = 'pause';
                radioStream.play();
                isPlaying = true;
                console.log('isPlaying ' + isPlaying);
                console.log("Play button");
            } else {
                button.className = 'play';
                radioStream.pause();
                console.log("Pause button");
            }
        }
    };
})();