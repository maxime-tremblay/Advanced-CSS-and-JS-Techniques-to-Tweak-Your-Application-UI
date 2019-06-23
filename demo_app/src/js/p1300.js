// Page 1300 Specific JS
// Overlay Navmenu

var demo = demo || {};

demo.page1300 = {};

(function(curPage, $){
    "use strict";

    /*
     * Document ready logic
     */
    $( function() {
        if (demo.isCurrentPage(1300)) {
            //initialize the overlay menu
            demo.initOverlayMenu();
        }
    });
})(demo.page1300, apex.jQuery);
