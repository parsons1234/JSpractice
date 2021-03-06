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

//＊＊＊＊＊＊切記＊＊＊＊方法是可以重複使用的 不要硬寫
/*
function nextInLine(arr,item)
{
    arr.push(item);
    var removed = arr.shift();//陣列會先刪掉第一個數字 然後把值設定給removed
    return removed;   //,也可以直接return arr.shift()不設removed這個變數
}

var testArr = [5,6,7,8,9];
console.log("Before:"+JSON.stringify(testArr));
console.log(nextInLine(testArr,10));
console.log("After: "+JSON.stringify(testArr));
*/

//js中的boolean 不需要引號 字串 "true" or "false" 不是布林值
/*
function showBoolean()
{
    //return true;
    return false;
}
console.log(showBoolean());
*/

//js == 一般相等可以比較字串跟數字 會顯示true 但如果是嚴格相等 ＝＝＝會因為型別不同顯示false
/*
function testqual()
{
    if (1=='1')
    {
        return true;
    }
    return false;
}

console.log(testqual());
*/


//typeof 可以顯示變數的資料型別
/*
console.log(typeof 3);
console.log(typeof "3");
*/

//嚴格不相等 與不等式（！＝）不相同，嚴格不相等把不同型別視為不同
/*
function testInequal(val)
{
    if(val!==17)
    {
        return "Not equal";
    }
        return "equal";
    
}
console.log(testInequal("17"));//Not equal
console.log(testInequal(17));//equal
*/

// >，< ， >= ， <= 會和＝一樣在比較時轉換數據類型
//用>舉例
/*
console.log(3>3);
console.log(4>3);
console.log('5'>3);
console.log(5>'3');
*/

// &&用法 and
/*
var x=5,y=8;
if(x >=5&& y>=8)
{
    console.log(true) ;
}
else
  console.log(false);
*/

// ||用法 or
/*
var x=5,y=8;
if(x<5||y>8)
{
    console.log(true);
}
else 
    console.log(false);
*/
//多重條件式
/*
var mathScore = 50;
if(mathScore>=90)
{
    console.log("Excellent");
}
else if(mathScore>=80)
{
    console.log("good");
}
else if(mathScore>=60)
{
    console.log("pass");
}
else
    console.log("Fail");
 */


 //switch case的值使用===(嚴格相等式)判斷，另外記得打break，不然下一行會被執行
 //當caseInSwitch(1)時，若switch判斷內的case 1 打成 case "1" 在呼叫方法時就會無法判斷(因為他的型別不一樣)
/*
 function caseInSwitch(val) {
    var answer = "";
    switch(val)
    {
      case 1:
        console.log("alpha");
        answer ="alpha";
        break;
       case 2:
        console.log("beta");
         answer ="beta";
        break;
       case 3:
        console.log("gamma");
         answer ="gamma";
        break;
       case 4:
        console.log("delta");
         answer ="delta";
        break;
    }
    return answer;
  }
  
  caseInSwitch(1);
*/


//switch 有default版 default 應該在最後 
/*
function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch(val)
    {
    case "a":
      answer="apple";
      break;
    case "b":
      answer="bird";
      break;
    case "c":
      answer="cat";
      break;
    case "d":
      answer="stuff";
      break;
    default:
      answer="stuff";
      break;
    
    }
  
    
    
  
  
    // Only change code above this line
    console.log(answer);
    return answer;
   
  }
  
  switchOfStuff(1);//會輸出stuff 因為switch 採用嚴格相等 case中沒有與1相等的 所以是default 的answer
*/

//switch 如果沒有break會一直向下執行case直到遇見break

/*
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val)
  {
    case 1:
    case 2:
    case 3:
      answer="Low";
     break;
    case 4:
    case 5:
    case 6:
     answer="Mid";
      break;
    case 7:
    case 8:
    case 9:
     answer="High";
      break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);
*/






/*  
//比較運算子會產生true or false 有些人可能會這樣寫
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
*/


//但有更好的方式 直接return 比較結果
/*
function isEqual(a,b) {
    return a === b;
  }

*/

// > < 就是 return a<b 程式碼以a<b為例

/*
function isLess(a, b) {
  
 return a<b;
 
}

isLess(10, 15);
*/


// 若條件式一樣可以寫在一起 減少程式碼
/*
var count = 0;

function cc(card) {
switch(card)
{
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 7:
  case 8:
  case 9:
    count+=0;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    break;




}

 if(count>0)
 {
   console.log(count," Bet");
  return count+" Bet";
 }
 else{
    console.log(count," Hold");
  return count+" Hold";
 }
 
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
*/


/*
-------------------------------觀念補充------------------------------------
return 是用在函式（function）裡面，另外在return以下的程式碼不會被執行

例如：
function testFunction()
{
  .......
  ............
  ........

  return xxx;
  console.log(xxx);//這就不會被執行
}


而，console.log不限用於函式或全域範圍

console.log用來檢視（印出）我們想知道的環節

function可以定義為回傳值或沒有回傳值，若要對function回傳的值做後續處理，那麼就必須return

*/


//建立物件
/*
//如果是非字串屬性 js會自動將屬性轉為字串

var myDog = {
"name":"Monkey",
"legs":5,
"tails":2,
"friends":["bird","panda"]
};

*/

//另外，可以用數字當屬性，也可以省略字串的引號，

//如果物件有非字串的屬性，js會自動將他的類型轉為字串
//範例如下：

/*
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
console.log(anotherObject[5]);
*/

//有兩種方式存取物件屬性

//第一種方式 使用.存取屬性
/*
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
console.log(prop1val);
console.log(prop2val);

*/

//第二種方式 使用括號存取屬性
//如果要存取的屬性中間有空格就需要用到這個方法,沒有空格也可以使用！
//有空格的屬性名稱需要用單引號或雙引號
/*
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
console.log(myObj["Space Name"]); // Kirk
console.log(myObj['More Space']); // Spock
console.log(myObj["NoSpace"]); //USS Enterprise
*/

//透過變數存取物件的屬性
/*
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber=16;      
console.log(playerNumber);
var player = testObj[playerNumber];   
console.log(player);

*/


//更新物件屬性

/*
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
//myDog.name="Happy Coder"; 
myDog["name"]="Happy Coder"; //兩種寫法都可以
console.log(myDog["name"]);

*/



//紀錄收集
/*
=======
//新增物件屬性

/*
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark="woof";
myDog["bark"]="woof";  //這兩種方法都可以新增物件的屬性
*/


//刪除物件的屬性
/*
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

//delete myDog.tails;
delete myDog["tails"];//這兩種方法都可以刪除物件的屬性

*/

//使用物件進行查找
/*
function phoneticLookup(val) {
  var result = "";
 var test={
  "alpha":"Adams",
  "bravo":"Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo":"Easy",
  "foxtrot": "Frank"
 }
  
  result=test[val];
  return result;
}

console.log(phoneticLookup("charlie"));
*/


//使用hasOwnProperty()測試物件的屬性
//最後的答案會需要透過變數存取屬性 例如要顯示hat 那就要用變數存取屬性的方式obj[checkProp]
/*
var myObj={
  top:"hat",
  bottom:"pant"
};
function checkObj(obj,checkProp)
{
  if(obj.hasOwnProperty(checkProp)==true)
  {
   console.log(obj[checkProp]);
  }
  else
  console.log("Not Found");
}

checkObj(myObj,"top");
*/




//操作複雜物件

//---------------------------------------觀念----------------------------------
/*
     JavaScript Object Notation 簡稱JSON是用於儲存資料的相關資料交換格式。

      JSON物件基本上就是JavaScript物件

     **記得** 除非是最後一個屬性否則必須在結尾加上逗號
*/
/*
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
 
    "gold": true
  },//記得加上逗號
  //這裡之後是我加的
  {
    "artist":"Parsons Chen",
    "title":"Piano Girl",
    "release_year":1997,
    "formats":[
      "DVD",
      "5G",
      "DL"
    ]
  }

];

*/





//存取嵌套物件
//物件的子屬性可以用點或括號來存取

/*

var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"

*/


/*

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents =myStorage.car.inside["glove box"];//有空格要記得用引號

*/





//存取嵌套陣列
/*

var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
*/



/*
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(object, id, prop, value) {
  if (prop!=="tracks"&&value!=="") //會用"tracks"作比較是因為 用object[id][track]顯示的是tracks的值,但是我們要比較的是有沒有tracks這個屬性
  {
    object[id][prop]=value;
  }
  else if(prop==="tracks"&&object[id].hasOwnProperty("tracks")==false)
  {
    object[id][prop]=[value]; //value要加上[] 不然push 沒辦法作用
  }
  else if(prop==="tracks"&&value!=="")
  {
    object[id][prop].push(value);
  }
  else if(value=="")
  {
    delete object[id][prop];
  }
  return object;
}

console.log(updateRecords(collection, 5439, 'tracks', 'ABBA'));
*/

//while迴圈
/*
var myArray = [];
var i=5;
while(i>=0)
{
    myArray.push(i);//將i push入陣列的尾端
    i--;
}
console.log(myArray)
*/

//for迴圈
/*

var myArray = [];
for(var i=1;i<=5;i++)
{
    myArray.push(i);
}

*/





//for迴圈 印出奇數
/*
var myArray = [];
for (var i=1;i<=9;i+=2)
{
    myArray.push(i);
}

console.log(myArray);
*/




//for迴圈 倒數
/*
var myArray = [];
for(var i = 9;i>=1;i-=2)
{
    myArray.push(i);
}
console.log(myArray)

*/

//用for迴圈把所有陣列中的數字＋起來



/*


var myArr = [ 2, 3, 4, 5, 6];
console.log(myArr.length);//輸出5

var total=0;
for(var i=0;i<myArr.length;i++)//記得陣列從0開始數 但是length是算陣列的長度
{
    total+=myArr[i];
}
console.log(total);
*/





//走訪所有陣列並把所有數字相乘

/* 
//複習一下

var arr=[[1,2],[3,4],[5,6]];
console.log(arr[1][1]); //輸出4

*/
/*
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0;i<arr.length;i++)
  {
    for (var j=0;j<arr[i].length;j++)
    {
      product*=arr[i][j];
      console.log(product);
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
*/





//do while 至少執行一次
/*
var myArray = [];
var i = 10;

do{
myArray.push(i);
  i++;
}while (i < 5) ;
*/



//遞迴 前n項的總和

/*
function sum(arr, n) {
  
  if(n<=0)
  {
    return 0; //如果小於0或=0 return 0
  }
  else
  {
      return sum(arr,n-1)+arr[n-1]; //否則函式的n-1 +arr[n-1](陣列的n-1)
  }
    

  
}

*/




/*
// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];
function lookUpProfile(name, prop){
  // Only change code below this line
  for(var i=0;i<contacts.length;i++)
  {
      if(contacts[i].firstName===name)
  {
      if(contacts[i].hasOwnProperty(prop))
      {
          return contacts[i][prop];
      }
      else 
          return "No such property";
  }
      
  }
  return "No such contact";
    
  // Only change code above this line
  
  }
  console.log(lookUpProfile("Kristian", "lastName"));
*/






//隨機生成亂數小數
/*
  function randomFraction() {

    // Only change code below this line
  
    return Math.random();
  
    // Only change code above this line
  }
console.log(randomFraction());
*/

//隨機生成亂數整數
/*
------------------------------觀念------------------------

Math.random（）會生成0~1之間的數 可以返回0但永遠不可能返回1


*/

/*

function randomWholeNum() {

  // Only change code below this line
  return Math.floor(Math.random()*10);
}

console.log(randomWholeNum());
*/



//將字串轉為整數
//舉例 var a = parseInt("007");
//若字串不能轉為數字 則返回NaN
/*
function convertToInteger(str) {
  var a =parseInt(str);
  return a;
}

//console.log(convertToInteger("ㄅ "));像這樣就會回傳NaN
//console.log(convertToInteger("123"));

*/



/*
在parseInt()中使用 Radix
radix 是 parseInt函式中的第二個參數
parseInt(string, radix); //像這樣
//舉例 var a = parseInt("11", 2);這段程式碼的意思是"11"是在2進制
*/

/*
function convertToInteger(str) {
  var a = parseInt(str,2);
  return a;
  }
  
  console.log(convertToInteger("10011"));
*/




//三元運算子

/*
function checkEqual(a, b) {
  return a==b?"Equal":"Not Equal";
}

console.log(checkEqual(1, 2));
*/


//多個條件的三元運算子
/*


//以下程式碼用 if else if else 檢查多個條件
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

*/


//上面那個例子可以用三元運算子重新改寫
/*

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}

*/


/*遞迴倒數
function countdown(n){
  if(n<1)
  {
    return [];
  }
  else
  {
    const countArray=countdown(n-1);
     countArray.unshift(n);
    return  countArray;
  }

}
console.log(countdown(10));
*/





//使用遞迴創造一個數字範圍
/*
function rangeOfNumbers(startNum, endNum) {
  if(endNum<startNum)
  {
    return [];
  }
  else{
const countArray=rangeOfNumbers(startNum,endNum-1);
    countArray.push(endNum);
    return countArray;
 
  }
    
};
console.log(rangeOfNumbers(6,9));

*/