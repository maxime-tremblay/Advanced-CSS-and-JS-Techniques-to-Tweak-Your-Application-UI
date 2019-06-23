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

// Application Global JS

var demo = demo || {};

(function($){

    /**
     * Returns boolean for media query
     * @param {string} mediaQueryString e.g. (min-width: 400px)
     * @return {boolean}
     */
    var mediaQuery = function( mediaQueryString ) {
        var matchMedia = window.matchMedia || window.msMatchMedia;
        if ( matchMedia ) {
            return matchMedia( mediaQueryString ).matches;
        } else {
            return false;
        }
    };

    var hideNavItems = function () {
        if ( mediaQuery('(min-width: 641px)') ) {
            $('.t-NavigationBar-menu .fa.a-Menu-item--hide-xs-up').closest('.a-Menu-item').addClass('hidden-xs-up');
        }
    };

    /*
     * Document ready logic
     */
    $( function() {
        $( ".t-NavigationBar-menu" ).menu({
            beforeOpen: function( event, ui ) {
                hideNavItems();
            }
        });
    });
})(apex.jQuery);

// Page 101 Specific JS
// Login Page

var demo = demo || {};

demo.page101 = {};

(function(curPage, $){
    "use strict";

    var l_affectedRegionSel = '.t-Region--loginWrapper',
        l_loginAnim = 'anim-showLogin',
        l_registerAnim = 'anim-showRegister',
        l_registerState = 'is-register',
        l_animLength = 1000,
        l_animDelay = 200;

    curPage.showLogin = function() {
        $(l_affectedRegionSel).addClass(l_loginAnim);

        setTimeout(function(){
            $(l_affectedRegionSel).removeClass(l_registerState);
        }, (l_animLength/2) + l_animDelay);

        setTimeout(function(){
            $(l_affectedRegionSel).removeClass(l_loginAnim);
        }, l_animLength + l_animDelay);
    };

    curPage.showRegister = function() {
        $(l_affectedRegionSel).addClass(l_registerAnim);

        setTimeout(function(){
            $(l_affectedRegionSel).addClass(l_registerState);
            $(l_affectedRegionSel).removeClass(l_registerAnim);
        }, l_animLength + l_animDelay);
    };

    var l_grid_class = 'grid',
        l_grid_item_class = 'grid__item',
        l_grid_html = '<div class="' + l_grid_class + '">' +
                         '<div class="' + l_grid_item_class + '" style="--span:2; --colStart:14; --rowStart:5; --blur:1px;"></div>' +
                         '<div class="' + l_grid_item_class + '" style="--span:2; --colStart:9; --rowStart:8; --blur:9px;"></div>' +
                         '<div class="' + l_grid_item_class + '" style="--span:6; --colStart:2; --rowStart:2; --blur:3px;"></div>' +
                         '<div class="' + l_grid_item_class + '" style="--span:2; --colStart:4; --rowStart:4; --blur:1px;"></div>' +
                         '<div class="' + l_grid_item_class + '" style="--span:4; --colStart:1; --rowStart:4; --blur:8px;"></div>' +
                         '<div class="' + l_grid_item_class + '" style="--span:6; --colStart:4; --rowStart:3; --blur:5px;"></div>' +
                         '<div class="' + l_grid_item_class + '" style="--span:5; --colStart:11; --rowStart:1; --blur:2px;"></div>' +
                      '</div>';
    
    function _addGridContainer(){
        $('body').append(l_grid_html);
    }
    
    function _removeGridContainer(){
        $('.' + l_grid_class).remove();
    }
    
    curPage.changeBackground = function (){
        var l_className = 't-Region--flexBody',
            l_backgroundClass = ['t-PageBody--backgroundGradient','t-PageBody--backgroundGrid','t-PageBody--backgroundImage'],
            l_toggleItem = 'P101_BACKGROUND',
            l_affectedRegionSel = '.t-PageBody--login',
            l_toggleValue = apex.item(l_toggleItem).getValue();

        $(l_affectedRegionSel).removeClass(l_backgroundClass.join(' '));
        _removeGridContainer();

        if (l_toggleValue === 'GRADIENT'){
            $(l_affectedRegionSel).addClass(l_backgroundClass[0]);
        }
        else if (l_toggleValue === 'GRID'){
            $(l_affectedRegionSel).addClass(l_backgroundClass[1]);
            _addGridContainer();
        }
        else if (l_toggleValue === 'IMAGE'){
            $(l_affectedRegionSel).addClass(l_backgroundClass[2]);
        }
    };
})(demo.page101, apex.jQuery);

// Page 1100 Specific JS
// Reports Tuning

var demo = demo || {};

demo.page1100 = {};

(function(curPage, $){
    "use strict";
    var l_rowSelectedClass      = 'rowSelected',
        l_reportShowCheckbox    = 'js-showCheckbox',
        l_checkbox_sel          = '.rowSelector',
        l_actionMenuTrigger_sel = '.actionMenu--trigger',
        l_actionMenu_sel        = '.actionMenu';

    var menu$ = $("<div id='actionsMenu'></div>");
    
    curPage.initReportMenu = function() {
        $("body").append(menu$);
        
        //get tjhe items and generate the menu content
        menu$.menu({
            asyncFetchMenu: function( menu, callback ) {
                var triggeringElement = $(event.currentTarget);
                var promise = apex.server.process( "menu_init", {x01: triggeringElement.data('empno') });

                promise.done( function( data ) {
                    // use data to populate menu.items
                    menu.items = data.items;
                    
                    callback();
                });
            }
        } );
       
        // toggle the active state and show the menu
        $(l_actionMenuTrigger_sel).on('click', function() {
            var target$,
                pos;
            
            // set active
            $(this).addClass('is-active');
            
            target$ = $( event.target );
            pos = target$.offset();
            
            //show the menu according to where it was called from
            menu$.menu( "toggle", pos.left, pos.top + target$.outerHeight() );
        });

        //remove the active state when menu closes
        menu$.on( "menuafterclose", function( event, ui ) {
            $('.example-3 .is-active').removeClass('is-active');
        } );
    };

    /*
     * Document ready logic
     */
    $( function() {
        if (demo.isCurrentPage(1100)) {
            $('.example-1 ' + l_checkbox_sel + ', .example-2 ' + l_checkbox_sel + ', .example-3 ' + l_checkbox_sel).change(function () {
                var report$    = $(this).closest('.t-Report'),
                    row$       = $(this).closest('tr'),
                    checkedCnt = report$.find(l_checkbox_sel + ':checked').length;
                
                if (this.checked) {
                    row$.addClass(l_rowSelectedClass);
                }
                else {
                    row$.removeClass(l_rowSelectedClass);
                }
    
                if (checkedCnt > 0) {
                    report$.addClass(l_reportShowCheckbox);
                }
                else {
                    report$.removeClass(l_reportShowCheckbox);
                }
            });

            curPage.initReportMenu();
        }
    });

})(demo.page1100, apex.jQuery);
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

// Page 1800 Specific JS
// Alert and Confirm messages

var demo = demo || {};

demo.page1800 = {};

(function(curPage, $){
    curPage.custom_alert = function( message, title ) {
        if ( !title ) {
            title = 'Alert';
        }
    
        if ( !message ) {
            message = 'No Message to Display.';
        }
    
        $('<div></div>').html( message ).dialog({
            title: title,
            resizable: false,
            modal: true,
            buttons: {
                'Ok': function()  {
                    $( this ).dialog( 'close' );
                }
            }
        });
    };

    /*
     * Document ready logic
     */
    $( function() {

    });

})(demo.page1800, apex.jQuery);


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

//# sourceMappingURL=app.js.map
