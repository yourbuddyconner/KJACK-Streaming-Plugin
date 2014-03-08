// get all the DOM objects used
var ViewMain = {
    // replaces the data in an element if it does not already exist
    DOMDataReplacer: function (element, data) {
        if (element.innerHTML != data) {
            element.innerHTML = data;
        }
    }
}