
// Page 1900 Specific JS
// Selection Using Cards

var demo = demo || {};

demo.page1900 = {};

(function(curPage, util, $){
    curPage.toggleSelect = function( pSelectedId, pServerProcessName ) {
        var l_selectedClass = 'is-Selected',
            $cardItem       = $('.t-Cards-' + pSelectedId);
            
        apex.server.process(pServerProcessName,
                            {
                                x01: pSelectedId,
                                x02: ($cardItem.hasClass(l_selectedClass)) ? 'N' : 'Y'
                            },
                            {
                                success: function(pData) {
                                    // If the AJAX is successful set the value or the returned items
                                    if (pData.success === true){
                                        $cardItem.toggleClass(l_selectedClass);
                                    }
                                },
                                error: function(request, status, error) {
                                    apex.debug.error('Selection Failed: ' + request.responseText);
                                }
                            });
    };
    
    function _debouncedSearch() {
        var lDebounceTime = 500,
            lSearchItem = '.search_item',
            lResultRegion = 'REG_EMP';

        
        function refreshRegion() {
            //refresh the region
            apex.region(lResultRegion).refresh();
        }
            
        $(lSearchItem).on( "keydown", util.debounce(refreshRegion, lDebounceTime ) );
    }

    /*
     * Document ready logic
     */
    $( function() {
        if (demo.isCurrentPage(1910)) {
            _debouncedSearch();
        }
    });

})(demo.page1900, apex.util, apex.jQuery);
