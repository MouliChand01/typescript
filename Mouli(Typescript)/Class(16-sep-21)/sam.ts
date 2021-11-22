var a:number=10;
var b:string="mouli";

class cls1{
    static c1:number=100;
    constructor(){
        console.log(a)
        console.log(cls1.c1)

    }
}
class cls2 extends cls1{
    constructor(){
       super()
    }
}

let obj=new cls2();
