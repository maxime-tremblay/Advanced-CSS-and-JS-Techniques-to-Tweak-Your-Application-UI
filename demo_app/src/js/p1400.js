// Page 1400 Specific JS
// Region in Navbar

var demo = demo || {};

demo.page1400 = {};

(function(curPage, $){
    var treeNav_sel = '#t_TreeNav';

    function _addRegionAbove() {
        $('.page-1400 .aboveNavBar').prependTo(treeNav_sel);
    }
    function _addRegionUnder() {
        $('.page-1400 .underNavBar').appendTo(treeNav_sel);
    }

    /*
     * Document ready logic
     */
    $( function() {
        if (demo.isCurrentPage(1400)) {
            _addRegionAbove();
            _addRegionUnder();
        }
    });
})(demo.page1400, apex.jQuery);
