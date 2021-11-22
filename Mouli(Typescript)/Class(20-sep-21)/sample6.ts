 /* 
 function disc(a:number,...args:string[])
{
    console.log(a+" "+args);
}
let name1:string[]=["mouli","chand"]
disc(10,...name1);
//disc(10,["ram","pandu"])



function disc(a:number,...args:string[])
{
    console.log(a+" "+args);
}
let name1=[10,"mouli","chand"]
disc(name1);
*/

/*
class cls1{
    private a:number=10;
    protected c:number=20;
    constructor(){
        console.log("class one constructor")
    }
    ab(){
        console.log(this.a);
    }
}

class cls2 extends cls1{
    public b:number=100;
    constructor()
    {
        super();   //call parent class constructor will be execute
        console.log("class two constructor")
    }
    ab1(){
        console.log(this.b);
        console.log(this.c); // the protected variable we can access child only and we can access modules only


    }
}

class cls3 extends cls2{
    constructor()
    {
        super();   //call parent class constructor will be execute
        console.log("class three constructor")
        console.log(this.b)
        console.log(this.a) //we can't access private variable
        console.log(this.c);

    }
}
var obj=new cls3();
obj.ab();
*/


/*
class cls1{
    private a:number=10;
    constructor(d:number){
        console.log("class one constructor")
    }
    ab(){
        console.log(this.a);
    }
}

class cls2 extends cls1{
    constructor()
    {
        super();   //call parent class constructor will be execute
        console.log("class two constructor")
    }
 }
var obj=new cls2(10)
*/

class cls1{
    constructor(private s:number)
    {
      console.log(this.s) 
      //console.log(s) 
    }
    disp(){
        let obj=new cls1(10)
       //console.log(obj.s)
    }
}
var v=new cls1(30)
v.disp()
