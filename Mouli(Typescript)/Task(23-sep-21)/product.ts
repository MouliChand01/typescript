interface product{
    addproduct()
    displayproduct()
}

class products{
    protected ID: number;
    protected ProductName: string;
    protected quantity: number;
    protected price:number;
    constructor(n1:number,n2:string,n3:number,n4:number){
        this.ID=n1;
        this.ProductName=n2;
        this.quantity=n3;
        this.price=n4;
    }
}

class ProductDetails implements product{
    arr=[];
    addproduct(){
        var obj=new products(1,"Mi-Tv",1,12000)
        var obj1=new products(2,"AC",2,40000)
        this.arr.push(obj);
        this.arr.push(obj1)

    }
    displayproduct(){
        let res=""
       

        for(let i of this.arr){
            res=` product_id:${i.ID}\n product_name:${i.ProductName}\n product_quantity:${i.quantity}\n price:${i.price}\n`
            console.log(res);
            res=""


        }
    }
}
 let ans=new ProductDetails()
 ans.addproduct();
 ans.displayproduct();
 