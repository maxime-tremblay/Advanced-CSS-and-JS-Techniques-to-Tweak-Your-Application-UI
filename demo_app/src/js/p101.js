// Page 101 Specific JS
// Login Page

var demo = demo || {};

demo.page101 = {};

(function(curPage, $){
    "use strict";

    let l_affectedRegionSel = '.t-Region--loginWrapper',
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
})(demo.page101, apex.jQuery);
