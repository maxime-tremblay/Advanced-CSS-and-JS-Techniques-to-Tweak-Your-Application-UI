/**
 * @fileOverview
 * The apex.theme42demo namespace is used to store all JavaScript functions used by theme 42 demo application
 **/
/*global apex, window, ToggleCore*/
apex.theme42demo = {};
(function(theme42demo, $, undefined) {
    "use strict";

    var openSamplePage = theme42demo.openSamplePage = function(url, title) {
        if (apex.theme42.util.mq(' (min-width: 1440px) ')) {
            apex.navigation.dialog(
                url, {
                    title: title,
                    height: '768',
                    width: '1024',
                    maxWidth: '768',
                    modal: true,
                    dialog: null
                },
                't-Dialog--standard', apex.jQuery('#R'));
        } else {
            apex.navigation.popup({
                url: url,
                name: title,
                width: 1024,
                height: 768
            });
        }
    };

    var openMobileSample = theme42demo.openMobileSamplePage = function(url, title) {
        if (apex.theme42.util.mq(' (min-width: 768px) ')) {
            apex.navigation.dialog(
                url, {
                    title: title,
                    height: '667',
                    width: '375',
                    maxWidth: '414',
                    modal: true,
                    dialog: null
                },
                't-Dialog--standard', apex.jQuery('#R'));
        } else {
            apex.navigation.popup({
                url: url,
                name: title,
                width: 375,
                height: 667
            });
        }
    };

    $(".t-TabsRegion").find(".t-LinksList-item a, .t-Card a, .t-MediaList-item  a, .t-Region-body .t-MenuBar a, .t-BadgeList-value a, .t-Breadcrumb-item a, .a-Menu a, .dm-ContentWell .t-Button").click(function() {
        return false;
    });

    $(".dm-ContentWell button").each(function() {
        $(this).off("click").prop("onclick", null);
    });

    theme42demo.noNavigate = function() {
        $("a").click(function() {
            return false;
        });
    };

    theme42demo.jump = function( id ) {
        apex.theme42.util.scrollTo( id );
    };

    theme42demo.renderCodeEditor = function(pSelector, pLang) {
        var lCode,
            lLang = pLang;

        $( pSelector ).each(function() {
            lCode = $( this ).text();

            $( this )
                .empty()
                .codeMirror = CodeMirror(this, {
                    value: lCode,
                    mode: lLang,
                    smartIndent: true,
                    lineNumbers: true,
                    textWrapping: false,
                    readOnly: true
                });

        });
    };


})(apex.theme42demo, apex.jQuery);