// Page 1500 Specific JS
// Flip Region

var demo = demo || {};

demo.page1500 = {};

(function(curPage, $){
    var flipContainer_sel = '.flip-container',
        front_sel         = '.front',
        back_sel          = '.back',
        flipTrigger_sel   = '.flipRegion--trigger';

    //initializes the flip regions
    function _initFlipRegion(){
        $(flipContainer_sel).flip({
            trigger: 'manual'
        });

        $(flipTrigger_sel).on('click', function() {
            $(this).closest(flipContainer_sel).flip('toggle');
        });
    }
    
    function _fixHeight() {
        //For all the flip regions
        $(flipContainer_sel).each(function() {
            var region$ = $(this);

            // Get the front and back content height
            var flipRegionContentHeight = region$.find(front_sel + ',' + back_sel).map(function(){
                return $(this).children('.t-Region-bodyWrap').outerHeight();
            }).get();

            // Get the tallest region
            var lMaxHeight = Math.max.apply(null, flipRegionContentHeight);

            // Set the front and back height so that everything shows
            region$.find(front_sel + ',' + back_sel).each(function(){
                $(this).children('.t-Region-bodyWrap').height(lMaxHeight);
            });
        });
    }

    /*
     * Document ready logic
     */
    $( function() {
        if (demo.isCurrentPage(1500)) {
            _initFlipRegion();

            _fixHeight();
        }
    });
})(demo.page1500, apex.jQuery);
