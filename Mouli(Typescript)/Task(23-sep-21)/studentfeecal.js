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
var student = /** @class */ (function () {
    function student(n1, n2, n3, n4, n5) {
        this.sname = n1;
        this.sid = n2;
        this.Gender = n3;
        this.month = n4;
        this.batch = n5;
        console.log("sname :" + this.sname + "\nsid:" + this.sid + "\nsgender:" + this.Gender + "\nMonth:" + this.month);
    }
    return student;
}());
var NormalBatch = /** @class */ (function (_super) {
    __extends(NormalBatch, _super);
    function NormalBatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalBatch.prototype.Calfee = function () {
        return "Fee amount is :10,000 Rs/-";
    };
    return NormalBatch;
}(student));
var weekendBatch = /** @class */ (function (_super) {
    __extends(weekendBatch, _super);
    function weekendBatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    weekendBatch.prototype.Calfee = function () {
        return "Fee amount is:20,000 Rs/-";
    };
    return weekendBatch;
}(student));
var ShortBatch = /** @class */ (function (_super) {
    __extends(ShortBatch, _super);
    function ShortBatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShortBatch.prototype.Calfee = function () {
        return "Fee amount is:30,000 Rs/-";
    };
    return ShortBatch;
}(student));
var obj = new NormalBatch("mouli", 101, "Male", "3-months", "NormalBatch");
console.log(obj.Calfee());
// let obj1=new weekendBatch("Chand",102,"Male","6-months")
// let obj2=new ShortBatch("Rani",103,"Female","2-months")
