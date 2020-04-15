// Application Global JS

var demo = demo || {};

(function($){

    /**
     * Returns boolean for media query
     * @param {string} mediaQueryString e.g. (min-width: 400px)
     * @return {boolean}
     */
    demo.mediaQuery = function( mediaQueryString ) {
        var matchMedia = window.matchMedia || window.msMatchMedia;
        if ( matchMedia ) {
            return matchMedia( mediaQueryString ).matches;
        } else {
            return false;
        }
    };

    demo.isCurrentPage = function( pPageNumber ) {
        return $('html').hasClass('page-' + pPageNumber);
    };


    var l_pageWidthTextSel = '.js-page_Width';

    var setPageWidthText = function () {
        $(l_pageWidthTextSel).text($(window).width() + 'px');
    };
    
    demo.initPageWithText = function () {
        setPageWidthText();

        //use resize because apexwindowresized is debounced
        $(window).on('resize', function() {
            setPageWidthText();
        });
    };
    
    demo.initOverlayMenu = function () {
        var  NAV_CONTROL_BUTTON = "#t_Button_navControl",
             page_body_sel      = '#t_PageBody';

        $(page_body_sel)
            .removeClass('apex-side-nav t-PageBody--leftNav')
            .addClass('t-PageBody--overlayNav');
        
        //fix the state if the navmenu was previously expanded
        if ($(NAV_CONTROL_BUTTON).hasClass('is-active')) {
            $(NAV_CONTROL_BUTTON).click();
        }
    };

    demo.autoDismissSuccessMessage = function () {
        var  page_body_sel      = '#t_PageBody';
        
        //auto hide success messages after 5 seconds
        //Note: The previous name for this API, apex.theme42.configureSuccessMessages, is deprecated and will be removed in a future release.
        apex.theme42.util.configAPEXMsgs({
            autoDismiss: true,
            duration: 5000  // duration is optional (Default is 3000 milliseconds)
        });
        
        $(page_body_sel)
            .addClass('js-autoDismissSuccessMessage');
    };

    /*
     * Document ready logic
     */
    $( function() {
        $('.codeTabs').tabs();
        
        //accordion menu
        $("#t_TreeNav").on("treeviewselectionchange", function() {
            var lSelection = $(this).treeView("getSelection");

            //if selection is not a link then expand
            if (!lSelection.children('.a-TreeView-label').is('a')){
                $(this).treeView("expand", lSelection);
            }
        });
        
        
        //show success message when a dialog page closes
        $(document).on('apexafterclosedialog', function(event, data){
            if (data.successMessage && data.successMessage.text) {
                apex.message.showPageSuccess(data.successMessage.text);
            }
        });
        
        //auto hide success messages after 5 seconds
        demo.autoDismissSuccessMessage();
        
        // init page width text
        if ($(l_pageWidthTextSel).length > 0) {
            demo.initPageWithText();
        }
    });
})(apex.jQuery);
