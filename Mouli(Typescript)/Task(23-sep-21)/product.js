var products = /** @class */ (function () {
    function products(n1, n2, n3, n4) {
        this.ID = n1;
        this.ProductName = n2;
        this.quantity = n3;
        this.price = n4;
    }
    return products;
}());
var ProductDetails = /** @class */ (function () {
    function ProductDetails() {
        this.arr = [];
    }
    ProductDetails.prototype.addproduct = function () {
        var obj = new products(1, "Mi-Tv", 1, 12000);
        var obj1 = new products(2, "AC", 2, 40000);
        this.arr.push(obj);
        this.arr.push(obj1);
    };
    ProductDetails.prototype.displayproduct = function () {
        var res = "";
        for (var _i = 0, _a = this.arr; _i < _a.length; _i++) {
            var i = _a[_i];
            res = " product_id:" + i.ID + "\n product_name:" + i.ProductName + "\n product_quantity:" + i.quantity + "\n price:" + i.price + "\n";
            console.log(res);
            res = "";
        }
    };
    return ProductDetails;
}());
var ans = new ProductDetails();
ans.addproduct();
ans.displayproduct();
