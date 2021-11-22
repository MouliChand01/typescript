var tup2=['mouli','ui','ojas'];
var[name1,domain,company]=tup2
console.log("name is :"+name1+"\ndomain is :"+domain+"\ncompany is :"+company)


var a:number=10
class Myclass1
{
    static b:number=20;
    c:number=30;
    myfun():void 
    {
        var d:number=40;
        console.log(d);
        console.log(this.c);
        console.log(Myclass1.b);
        console.log(a)
    }

}
var obj=new Myclass1();
obj.myfun();


class Mycls
{
 private one:string="mouli";
 private two:string="chand";

public mymethod1():string{
    return this.one;
}
public mymethod2():string{
    return this.two;
}
}

var obj1=new Mycls();
var x=obj1.mymethod1()
var y=obj1.mymethod2()
console.log(x,y)


class Mycls1{
    constructor(public arg1:any,
                public arg2:any){}
}
let obj2=new Mycls1({"k1":"hello-1"},
                    {"k2":"hello-2"},)         // constructor
console.log(obj2.arg1.k1)
console.log(obj2.arg2.k2)





