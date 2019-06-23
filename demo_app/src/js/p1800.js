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
