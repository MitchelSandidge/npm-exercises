const _ = require("lodash");
const $ = require('jquery');

const sayHello = (()=> {
    console.log("Hello world")});

sayHello();


$('body').css('background-color', 'green');


import { niceMessage } from './say-hello';

niceMessage();

// console.log(niceMessage);
