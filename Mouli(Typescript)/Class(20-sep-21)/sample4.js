var tup2 = ['mouli', 'ui', 'ojas'];
var name1 = tup2[0], domain = tup2[1], company = tup2[2];
console.log("name is :" + name1 + "\ndomain is :" + domain + "\ncompany is :" + company);
var a = 10;
var Myclass1 = /** @class */ (function () {
    function Myclass1() {
        this.c = 30;
    }
    Myclass1.prototype.myfun = function () {
        var d = 40;
        console.log(d);
        console.log(this.c);
        console.log(Myclass1.b);
        console.log(a);
    };
    Myclass1.b = 20;
    return Myclass1;
}());
var obj = new Myclass1();
obj.myfun();
var Mycls = /** @class */ (function () {
    function Mycls() {
        this.one = "mouli";
        this.two = "chand";
    }
    Mycls.prototype.mymethod1 = function () {
        return this.one;
    };
    Mycls.prototype.mymethod2 = function () {
        return this.two;
    };
    return Mycls;
}());
var obj1 = new Mycls();
var x = obj1.mymethod1();
var y = obj1.mymethod2();
console.log(x, y);
var Mycls1 = /** @class */ (function () {
    function Mycls1(arg1, arg2) {
        this.arg1 = arg1;
        this.arg2 = arg2;
    }
    return Mycls1;
}());
var obj2 = new Mycls1({ "k1": "hello-1" }, { "k2": "hello-2" });
console.log(obj2.arg1.k1);
console.log(obj2.arg2.k2);
