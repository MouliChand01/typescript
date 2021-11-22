abstract class student{
    protected sname:string;
    protected sid:number;
    protected Gender:string;
    protected month:string;
    protected batch:string
    constructor(n1:string,n2:number,n3:string,n4:string,n5:string){
        this.sname=n1;
        this.sid=n2;
        this.Gender=n3;
        this.month=n4;
        this.batch=n5;
        console.log(`sname :${this.sname}\nsid:${this.sid}\nsgender:${this.Gender}\nMonth:${this.month}`)
    }   
    
    abstract Calfee()
}

class NormalBatch extends student{
    Calfee(){
        return "Fee amount is :10,000 Rs/-"
    }

}
class weekendBatch extends student{
    Calfee(){
        return "Fee amount is:20,000 Rs/-"
    }
}
class ShortBatch extends student{
    Calfee(){
        return "Fee amount is:30,000 Rs/-"
    }
}

let obj=new NormalBatch("mouli",101,"Male","3-months","NormalBatch")
console.log(obj.Calfee())

// let obj1=new weekendBatch("Chand",102,"Male","6-months")
// let obj2=new ShortBatch("Rani",103,"Female","2-months")