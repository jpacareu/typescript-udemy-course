"use strict";
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.elements = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.elements[key] = item;
    };
    MyMap.prototype.clear = function () {
        this.elements = {};
    };
    MyMap.prototype.printMap = function () {
        for (var elem in this.elements) {
            console.log('Key: ' + elem + ' Value: ' + this.elements[elem]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
