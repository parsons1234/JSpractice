// 是js裡的註解

/* 這也是js的註解*/


//js 宣告變數用 var
//var myName; //像這樣
//console.log("hello world");     //console.log()是輸出

//js區分大小寫 MYVAR 跟 Myvar和myvar 是不一樣的

//最好使用駝峰命名法 第一個單字字首小寫 後面單字的字首大寫 
//example var someExample; 
// var anotherExampleName;

//js 四則運算
/*var x=5+8;
console.log(x);
var x=8-5;
console.log(x);
var x=4*8;
console.log(x);
var x=4/2;
console.log(x);*/

/* 
var y=5;
y++;
console.log(y);
var x=5;
x--;
console.log(x);
*/

/* 小數
var x=4.7;
console.log(x);
*/
//小數乘法
/*
var x=2.0*2.5;
 console.log(x);
 */


 //a=a*3; b=b/5; .....等 可以省略成 a*=3; b/=5;
 /*
 var a=50;
 var b=100;
 var c=150;
 var d=200;
 a*=3;
 b/=5;
 c+=10;
 d-=20;
 
 console.log(a);
 console.log(b);
 console.log(c);
 console.log(d);
*/

//js string

/*
var myFirstName="Chen";
 console.log(myFirstName);
*/

//若在字串中需要用到引號,記得與字串的引號分開使用避免報錯 ，若要使用同種引號 記得用\(反斜線)這個跳脫字元即可正常顯示
/*
var conversation = 'Finn exclaims to Jake, "Algebraic!"';
var string='hello,\'moto\'';
console.log(conversation);
console.log(string);
*/

//string 可以用+ 相連
/*
var myString="HAHA "+"Hello world. ";
console.log(myString);
*/

/* 字串變數可以跟其他字串加在一起
var myName  = "parsons";
var aboutMe = " I am " + myName + " and I am well";;
console.log(aboutMe);
*/


/* length可以知道字串的長度
var myName = "parsons";
var myNameLength = myName.length;
console.log(myNameLength);
*/

//myName[]可以獲得字串中的值，記得[]從0開始 所以o 是myName[4]
/*
var myName = "ParsonsChen";
var testChar = myName[4];
console.log(testChar);
*/

//若要改變字串中的內容 不能從[]改
//************這只是舉例，這是錯誤示範
/*
var myCountry= "Jaiwan";
myCountry[0]="T";
console.log(myCountry);
*/

//如果要找的字元從後面數比較近，可以用.length-的方式
/*
var myName = "ParsonsChen";
var testChar = myName[myName.length-2];
console.log(testChar);
*/

//陣列
/*
var testArray=[3,4,5];
console.log(testArray);
*/

//多維陣列 輸出9
/*
var testMultiArray=[[3,4,5,6],[7,8,9]]
console.log(testMultiArray[1][2]);
*/
//多維陣列 輸出0
/*
var testMultiArray2=[[3,4,5,6,7,8,9],[9,87,5634,5,2],[5,45,23,13,[1,2,3,5,0]]]
console.log(testMultiArray2[2][4][4]);
*/

//push函式會將push函式內的值加到陣列的尾端 
/*
var myArray=[3,4,5,6];
myArray.push(7);
console.log(myArray);
*/

/*
var myArray2=["HAHA","Helloworld"];
myArray2.push("你好");
console.log(myArray2);
*/

//pop函式會刪除陣列尾端的值 
/*
var threeArray = [1,2,3];
var deleteArray =threeArray.pop();
console.log(deleteArray);
console.log(threeArray);
*/

//shift 與pop不同 shift 是刪除第一個值
/*
var testArray = [3,2,1,4,5];
var deleteArray=testArray.shift();
console.log(deleteArray);
console.log(testArray);
*/


//unshift 是將值新增到最前面 
/*
var myArray=[["John",23],["dog",3]];
myArray.shift();
myArray.unshift(["Paul",35]);//[ 'Paul', 35, [ 'dog', 3 ] ]    [ [ 'Paul', 35 ], [ 'dog', 3 ] ] console內有[]跟沒[]的差別
console.log(myArray);
*/

//js的方法 每呼叫一次方法，就會執行該方法大括弧中的程式
/*
function reusableFunction()
{
    console.log("Hi World");
}
reusableFunction();
*/

//js 傳值呼叫
/*
function functionWithArg(a1,a2)
{
    console.log(a1+a2);
}
functionWithArg(3,4);
*/

//全域變數就是在函數以外定義的變數，具有全域性(像是在程式最上方定義的變數)
//宣告變數一定要 var 不然如果跟全域變數相同會產生意想不到的後果
/*
var test=5; //全域變數
function ckeck()
{
    test=10;
    console.log(test);
}
*/

