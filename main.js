"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'hola world';
console.log(message);
var a = 12;
var b = 99;
var c;
var abc = "holaa";
var beginner = false;
var sum = 100;
var naam = 'bhaswitha';
var sentence = "I am " + naam + "\n  i am a beginner in ts";
console.log(sentence);
var n = null;
var u = undefined;
var xyz = undefined;
var zxy = null;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var employee1 = ['ram', 23, 96];
var choco;
(function (choco) {
    choco[choco["dairy_milk"] = 9] = "dairy_milk";
    choco[choco["milky_bar"] = 10] = "milky_bar";
    choco[choco["kit_kat"] = 11] = "kit_kat";
})(choco || (choco = {}));
;
var ch = choco.milky_bar;
console.log(ch);
var random = 14;
random = true;
random = 'bhasu';
var x;
x = 10;
x = true;
var y = 15;
var multi;
multi = false;
multi = 52;
var anyType;
anyType = 'dog';
anyType = 57;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 5; }
    return num1 + num2;
}
add(4);
add(3, 5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var r = {
    firstName: 'bruce',
    lastName: 'lee'
};
fullName(r);
function fullNAme(perso) {
    console.log(perso.firstNAme + " " + perso.lastNAme);
}
var p = {
    firstNAme: 'bhas',
    lastNAme: 'witha'
};
fullNAme(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("good morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('bhaswitha');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating works");
    };
    return Manager;
}(Employee));
var m1 = new Manager('bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
