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
