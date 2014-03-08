/*
    What happens as the page loads.
    
    functions: bodyFontSize, androidOldFix
 */


var Layout = (function() {
    var self = this;

    return {
        images: {
            // kjack logo
            logo:function() {
                var logoImage = new Image();
                logoImage.src = 'img/logo.png';
                return pauseImage;
            },
            // play image for play pause button
            buttonPlay:function() {
                var playImage = new Image();
                playImage.src = 'img/play.png';
                return playImage;
            },
            // pause image for play pause button
            buttonPause:function() {
                var pauseImage = new Image();
                pauseImage.src = 'img/pause.png';
                return pauseImage;
            }      
        },
        // for the resizable font size
        setBodyFontSize: function (bodyHeight) {
            document.body.setAttribute('style', 'font-size:' + bodyHeight + 'px;');        
        }
    }
    
})();
