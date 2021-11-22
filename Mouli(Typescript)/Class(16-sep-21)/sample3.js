function myfum() {
    console.log("hai hallo wellcome");
}
myfum();
function myfum1(sno) {
    console.log(sno);
}
myfum1(100); // Funcations
function myfum3(fno, sno) {
    var res = fno + sno;
    return res;
}
console.log(myfum3(100, 200));
function myfum2(fno, sno) {
    if (sno === void 0) { sno = 100; }
    var res = fno + sno;
    return res;
}
console.log(myfum2(100));
console.log(myfum2(100, 200));
var add = function (f, s) {
    console.log("hello"); // arrow Funcation
};
console.log(add(10, 20));
for (var i_1 = 0; i_1 <= 10; i_1++) {
    console.log(i_1); // for loop
}
if (1) {
    console.log("ojas"); // if satatement
}
if (0) {
    console.log("ojas"); // if-else satatement
}
else {
    console.log("wellcome");
}
var i = 1;
while (i <= 10) {
    console.log(i); // while loop
    i++;
}
console.log("--------------");
i = 1;
do {
    console.log(i); // do while loop 1St do block will be execute after then we check the condition
    i++;
} while (i <= 10);
var marks = [10, 20, 30];
for (var j in marks) { // in for loop to get index values in array
    console.log(j);
}
var marks = [10, 20, 30];
for (var _i = 0, marks_1 = marks; _i < marks_1.length; _i++) { // of for loop to get values in the array
    var k = marks_1[_i];
    console.log(k);
}
marks.push(40);
marks.pop();
marks.unshift(0);
marks.shift();
marks.splice(0, 2); // for delating two ele
marks.splice(0, 0, 10, 20); // for adding two elements
console.log(marks);
var tup1 = [10, "hai", true]; // tuple creation is called  stracuting
console.log(tup1);
var l1 = tup1[0], l2 = tup1[1], l3 = tup1[2];
console.log(l1 + " " + l2 + " " + l3); //  de-stractureing on tuple
tup1.push(40); // all array methods we can use it in tuple
console.log(tup1);
console.log(tup1[4]); // undefind why tuple no index of len4 only index end's with index 3
console.log("----------------");
function myfun1(a, b) {
    if (b === void 0) { b = 10; }
    return (a + b); // defoult paramater
}
console.log(myfun1(10));
console.log(myfun1(10, 20));
console.log("----------------");
var arr1 = ["hai", "hallo"];
var arr2 = ["wel1", "wel2"];
arr2.forEach(function (i, j, k) {
    console.log(i, j, k);
});
