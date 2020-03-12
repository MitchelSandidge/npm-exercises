const _ = require("lodash");

export const niceMessage = (() => {
    console.log("hello nice message");
});


export const randomColor = (()=> {
    console.log(_.random(0, 6));
});



// module.exports = {niceMessage};