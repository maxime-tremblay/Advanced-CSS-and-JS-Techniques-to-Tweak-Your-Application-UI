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