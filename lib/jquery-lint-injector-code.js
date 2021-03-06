/* See license.txt for terms of usage */

"use strict";

module.metadata = {
  "stability": "stable"
};

/**
 * xxxHonza TODO docs
 */
const jQueryLintInjectorCode = "\
(function() {\
    var el = document.createElement('div');\
    var b = document.getElementsByTagName('body')[0];\
    var otherlib = false;\
    var msg = '';\
    el.style.fontFamily = 'Arial, Verdana';\
    el.style.position = 'fixed';\
    el.style.padding = '5px 10px 5px 10px';\
    el.style.margin = '0';\
    el.style.zIndex = 1001;\
    el.style.lineHeight = '46px';\
    el.style.fontSize = '40px';\
    el.style.fontWeight = 'bold';\
    el.style.color = '#444';\
    el.style.backgroundColor = '#FFFB00';\
    el.style.MozBorderRadius = '8px';\
    el.style.opacity = '0.8';\
    el.style.textAlign = 'center';\
    if (typeof jQuery == 'undefined') {\
        msg = 'No jQuery detected!';\
        return showMsg();\
    }\
    function getScript(url, success, failure) {\
        var script = document.createElement('script');\
        script.src = url;\
        var head = document.getElementsByTagName('head')[0],\
        done = false;\
        var timeout = setTimeout(function() { failure(); }, {{jQueryLintURLTimeout}});\
        script.onload = script.onreadystatechange = function() {\
            if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {\
                done = true;\
                clearTimeout(timeout);\
                success();\
            }\
        };\
        head.appendChild(script);\
    }\
    getScript('{{jQueryLintURL}}', \
    function() {\
        if (!jQuery.LINT) {\
            msg = 'Sorry, but jQuery Lint wasn\\'t able to load';\
            return showMsg(true);\
        }\
    }, function() {\
        msg = 'Unable to load jQuery Lint from:<br/>{{jQueryLintURL}}';\
        return showMsg(true);\
    });\
    function showMsg(isError) {\
        el.innerHTML = msg;\
        if (isError) el.style.backgroundColor = '#FF4444';\
        b.appendChild(el);\
        el.style.left = Math.floor((window.innerWidth - el.clientWidth) / 2) + 'px';\
        el.style.top = Math.floor((window.innerHeight - el.clientHeight) / 2) + 'px';\
        window.setTimeout(function() {\
            if (typeof jQuery == 'undefined') {\
                b.removeChild(el);\
            } else {\
                b.removeChild(el);\
                if (otherlib) {\
                    $jq = jQuery.noConflict();\
                }\
            }\
        },\
        2500);\
    }\
})();\
";

// Exports from this module
exports.jQueryLintInjectorCode = jQueryLintInjectorCode;
