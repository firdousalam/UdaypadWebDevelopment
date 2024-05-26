"use strict";
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 1] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book"; //3
})(PrintMedia || (PrintMedia = {}));
var PrintMedia1;
(function (PrintMedia1) {
    PrintMedia1[PrintMedia1["Newspaper"] = 10] = "Newspaper";
    PrintMedia1[PrintMedia1["Newsletter"] = 11] = "Newsletter";
    PrintMedia1[PrintMedia1["Magazine"] = 12] = "Magazine";
    PrintMedia1[PrintMedia1["Book"] = 13] = "Book";
})(PrintMedia1 || (PrintMedia1 = {}));
console.log(PrintMedia);
let x = 12;
if (x === PrintMedia.Magazine || PrintMedia1.Magazine) {
    console.log("this is magazine");
}
else {
    console.log("this is not Magazine");
}
