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

// polymorphisam in Typescript //
class cls1{
    dbfun():any{
        return " mango_db"
    }
    dbrun(){
        console.log("cls1 it's run")
    }
}
class cls2 extends cls1{
    dbfun():any{
        this.dbrun();
        super.dbrun();
        var name:string=super.dbfun();               // method over rideing
        console.log(name)
        return "cls2 it's run"
    }
}
var obj=new cls2();
console.log(obj.dbfun())



class Cls3
{
    f1(i:number,j:number):void;
    f1(i:string,j:string):void;
    f1(i:boolean,j:boolean):void;
    f1(i:number,j:boolean):void;
    f1(i:number,j:string):void{
      console.log(i,j);
    }
}
let obj1=new Cls3()
obj1.f1(10,10)
obj1.f1("hai","hai")
obj1.f1(true,false)
obj1.f1(10,true)
obj1.f1(10,"hallo")
