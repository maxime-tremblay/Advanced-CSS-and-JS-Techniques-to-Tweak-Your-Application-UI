// Page 1200 Specific JS
// Bootstrap-like Navbar

var demo = demo || {};

demo.page1200 = {};

(function(curPage, $){
    "use strict";

    /*
     * Document ready logic
     */
    $( function() {
        if (demo.isCurrentPage(1200)) {
            //remove layout modifier to show standard APEX behavior
            $('.t-NavigationBar-item').removeClass('hidden-xxs-down');
        }
    });

})(demo.page1200, apex.jQuery);