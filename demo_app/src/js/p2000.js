
// Page 1900 Specific JS
// Selection Using Cards

var demo = demo || {};

demo.page2000 = {};

(function(curPage, util, $){
    function _initButtonProgress() {
        $(document).on('click', '.t-Button.js-buttonProgress', function() {
            $(this).addClass('apex_disabled');
            
            $(this).find('.t-Button-label').append('<span aria-hidden="true" class="buttonProgress fa fa-anim-spin fa-circle-o-notch margin-left-sm"></span>');
        });
    }

    /*
     * Document ready logic
     */
    $( function() {
        if (demo.isCurrentPage(2000)) {
            _initButtonProgress();
        }
    });

})(demo.page2000, apex.util, apex.jQuery);
