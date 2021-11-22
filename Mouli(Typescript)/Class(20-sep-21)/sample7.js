/*
class cls1{
    protected i:number=10;
    public s1:number=100;
    constructor(private s:number){
        console.log(this.s)
    }
    static dip(){
        let obj=new cls1(10)
        console.log(obj.s)
    }
}
let s=new cls1(10);
console.log(this.i)
cls1.dip();
console.log(s.s1)
console.log(this.s1)
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// polymorphisam in Typescript //
var cls1 = /** @class */ (function () {
    function cls1() {
    }
    cls1.prototype.dbfun = function () {
        return " mango_db";
    };
    cls1.prototype.dbrun = function () {
        console.log("cls1 it's run");
    };
    return cls1;
}());
var cls2 = /** @class */ (function (_super) {
    __extends(cls2, _super);
    function cls2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cls2.prototype.dbfun = function () {
        this.dbrun();
        _super.prototype.dbrun.call(this);
        var name = _super.prototype.dbfun.call(this);
        console.log(name);
        return "cls2 it's run";
    };
    return cls2;
}(cls1));
var obj = new cls2();
console.log(obj.dbfun());
