'use strict';

(function (global, factory) {

    if(typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory()
    } else {
        if(typeof define === 'function' && define.amd) {
            define(factory)
        } else {
            (global.React = factory());
        }
    }
    
}(this, (function () { 'use strict'; 




}

)));

/*

See too...

    https://github.com/ForbesLindesay/umd/blob/master/template.js

    https://github.com/azat-co/react/blob/master/ch1/menu/react-dom.js

*/
