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

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.12.0';





// line 3708
var React = {
    
};






// line 3779
var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.


var react = React$3.default || React$3;

return react;


}

)));
