(function(win, doc) {
    "use strict";
    function hideByTagname(tag) {
        console.log(tag)
        let htmlItemToHide = doc.getElementById(tag)
        console.log('htmlItemToHide', htmlItemToHide)
    }
    win.hideByTagname = hideByTagname;
})(window, document); 