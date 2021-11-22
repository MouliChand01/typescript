// let str1:string="hello world";
// let res1:number=36;
// console.log(str1);
// console.log(res1+10);
// let name1:string='MouliChand';
// let mes1:string=`Myname Is ${name1} Iam a Good Boy`;
// console.log(mes1);
function add(num1, num2, num3) {
    if (num3)
        return num3 + num2 + num1;
    else if (num2)
        return num2 + num2;
    else
        return num1;
}
console.log(add(10, 40, 60));
console.log(add(10, 47));
console.log(add(10));
