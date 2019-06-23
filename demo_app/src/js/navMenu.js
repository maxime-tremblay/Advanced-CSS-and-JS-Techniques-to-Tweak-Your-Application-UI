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
