//This file isn't transiled, som must use CommonJS and ES5

//register babel to transile before our tests run
require('babel-register')();

//Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function () { };
