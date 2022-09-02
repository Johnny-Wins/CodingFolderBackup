/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    twoArray = [];

    for(count = 0; count < arr.length; count++) {
        twoArray[count] = 2 * arr[count]
    }

    return twoArray;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    evArray = [];

    for(count = 0; count < arr.length; count++) {
        if ((arr[count] % 2) === 0) {
            evArray.push(arr[count]);
        }
    }

    return evArray;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    fLArray = [];

    for(count = 0; count < arr.length; count++) {
        let newString = [];


        newString[0] = (arr[count].split(''))[0];
        
        newString[1] = (arr[count].split('')[(arr[count].length - 1)]);


        fLArray[count] = newString.join('');
    }

    return fLArray;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    keyyedArray = [];

    for(count = 0; count < arr.length; count++) {
        keyyedArray[count] = arr[count];

        keyyedArray[count][key] = value;
    }

    return keyyedArray;

}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    const resultList = {};

    charArray = str.split('');

    ay = 0;
    ee = 0;
    aye = 0;
    oh = 0;
    you = 0;

    for(count = 0; count < charArray.length; count++) {

        if (charArray[count] === 'a' || charArray[count] === 'A') {
            ay++
        }

        if (charArray[count] === 'e' || charArray[count] === 'E') {
            ee++
        }

        if (charArray[count] === 'i' || charArray[count] === 'I') {
            aye++
        }

        if (charArray[count] === 'o' || charArray[count] === 'O') {
            oh++
        }

        if (charArray[count] === 'u' || charArray[count] === 'U') {
            you++
        }
    }


    for(count = 0; count < charArray.length; count++) {

        if(ay > 0) {
            resultList.a = ay;
        }

        if(ee > 0) {
            resultList.e = ee;
        }

        if(aye > 0) {
            resultList.i = aye;
        }
        
        if(oh > 0) {
            resultList.o = oh;
        }
        
        if(you > 0) {
            resultList.u = you;
        }
    }

    return resultList

    
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {

    return arr.map(function(num){
        return num * 2;
    });

}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    
    return arr.map(function(num,ind){

        return num * ind;

    })

}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    
    keyArray = [];

    for(count = 0; count < arr.length; count++) {
        keyArray[count] = arr[count].name;
    }

    return keyArray;

}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    nameArray = [];

    for(count = 0; count < arr.length; count++) {
        nameArray[count] = arr[count].first;
        nameArray[count] += " ";
        nameArray[count] += arr[count].last;
    }

    return nameArray;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {

    return arr.filter(function (obj){
        if (obj[key]){
            return true;
        }
        else {
            return false;
        }

    }, key);

}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {

    for(count = 0; count < arr.length; count++) {

        if(arr[count] == searchValue)
            return count + 1; 

    }

    return undefined;

}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {

    for(count = 0; count < arr.length; count++) {

        if(arr[count][key] == searchValue) {
            return arr[count];
        }

    }

}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {

    const resultList = {};

    charArray = str.split('');

    charArray = charArray.filter(function(letter){
        if (letter == 'a' || letter == 'A') {
            return false;
        }

        if (letter == 'e' || letter == 'E') {
            return false;
        }

        if (letter == 'i' || letter == 'I') {
            return false;
        }

        if (letter == 'o' || letter == 'O') {
            return false;
        }

        if (letter == 'u' || letter == 'U') {
            return false;
        }

        return true;
    })

    charArray = charArray.map(function (letter) {
        return letter.toLowerCase();
    })

    return charArray.join('');
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {

    arr = arr.filter(function(num) {
        if(num % 2 != 0){
            return true
        }
    })

    return arr.map(function(num){
        return num * 2;
    })

}
