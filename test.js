//使用.存取物件屬性 知道要存取屬性的名稱就會使用.

/*var myDog={
"Name":"Lucky",
tails:1,
"enemies":["cat","mouse"]
}

*/


/*
//使用[]存取物件屬性 如果存取的物件屬性有空格 就必須使用[] 但是沒有也能用
var testObj={
    "an entree":"hamburger",
    "my side":"veggis",
    "the drink":"water"
}

var entreeValue=testObj["an entree"];
console.log(entreeValue);

*/



//使用括號的另一個用途是存取一個為變量的屬性 這對迭代一個物件的屬性或是存取一個查找表時非常有用

/*
var dogs={
Fido:"Mutt",
Hunter:"Doberman",
Snoopie:"Bealgle"
}
var myDog="Hunter"
var myBreed=dogs[myDog];
console.log(myBreed);
*/

/*
var myDog={
    "tail":1,
    "enemy":["he","she"],
    "food":"meet",
}


function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)==true)
    {
      return obj[checkProp];
    }
    else
  
    return "Not Found";
    // Only change code above this line
  }
  console.log(checkObj(myDog,"tail"));
*/



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
    if (prop!=="tracks"&&value!=="")
    {
      object[id][prop]=value;
    }
    else if(prop==="tracks"&&object[id].hasOwnProperty("tracks")==false)
    {
      object[id][prop]=value;
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
  