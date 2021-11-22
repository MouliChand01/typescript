 function myfum(){
     console.log("hai hallo wellcome");
 }
myfum()


 function myfum1(sno:number){
    console.log(sno);
}
myfum1(100);                                   // Funcations


function myfum3(fno:number,sno:number):number
{
    var res:number=fno+sno;
    return res;
    
}
console.log(myfum3(100,200))


function myfum2(fno:number,sno:number=100):number
{
    var res:number=fno+sno;
    return res;
    
}
console.log(myfum2(100))
console.log(myfum2(100,200))


let add=(f:number,s:number)=>
{
    console.log("hello")                // arrow Funcation
};
console.log(add(10,20))


for(let i:number=0;i<=10;i++){
    console.log(i);                    // for loop
}

if(1){
    console.log("ojas")                // if satatement
}

if(0){
    console.log("ojas")                // if-else satatement
}
else{
    console.log("wellcome")
}


var i:number=1;
while(i<=10){
    console.log(i);                   // while loop
    i++;
}

console.log("--------------")
i=1;
do{
    console.log(i);                  // do while loop 1St do block will be execute after then we check the condition
    i++;
}
while(i<=10)



var marks:number[]=[10,20,30];     
for (var j in marks){                 // in for loop to get index values in array
    console.log(j)
}

var marks:number[]=[10,20,30];
for (var k of marks){                // of for loop to get values in the array
    console.log(k)
}


marks.push(40);
marks.pop();
marks.unshift(0);
marks.shift()
marks.splice(0,2)                   // for delating two ele
marks.splice(0,0,10,20)             // for adding two elements


console.log(marks)



var tup1=[10,"hai",true];           // tuple creation is called  stracuting
console.log(tup1);
var[l1,l2,l3]=tup1;
console.log(l1+" "+l2+" "+l3);     //  de-stractureing on tuple
tup1.push(40);                     // all array methods we can use it in tuple
console.log(tup1)                 
console.log(tup1[4])               // undefind why tuple no index of len4 only index end's with index 3


console.log("----------------")
function myfun1(a:number,b=10){
    return(a+b);                   // defoult paramater
}
console.log(myfun1(10));
console.log(myfun1(10,20));

console.log("----------------")
let arr1:Array<string>=["hai","hallo"];  // for-each loop
let arr2:string[]=["wel1","wel2"];
arr2 .forEach ((i,j)=>{
    console.log(i,j,)
});