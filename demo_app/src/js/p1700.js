// Page 1400 Specific JS
// Fixed Region Header

var demo = demo || {};

demo.page1700 = {};

(function(curPage, $){

    /*
     * Document ready logic
     */
    $( function() {
        if (demo.isCurrentPage(1700)) {
            $(".t-Region--stickyRegion .t-Region-header").stickyWidget({toggleWidth: true});
        }
    });

})(demo.page1700, apex.jQuery);
