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
// inhertance concept
var Mycls2 = /** @class */ (function () {
    function Mycls2() {
    }
    return Mycls2;
}());
var one = 10;
var Myclas3 = /** @class */ (function (_super) {
    __extends(Myclas3, _super);
    function Myclas3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Myclas3;
}(Mycls2));
var two = 100;
var obj3 = new Myclas3();
