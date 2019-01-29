var sheeps = 0;
arraySheep = [true, true, true, false, true, true];

function countSheep(arraySheep) {

    for (var i = 0; i < arraySheep.length; i++) {
        if (arraySheep[i] == true) {
            sheeps++;
        }


    }
    return sheeps;
    console.log(sheeps);
}



reverseList = [1, 2, 3, 4]


function reverse(reverseList) {
    // var new Array = [];
    var rev = new Array;
    for (var i = reverseList.length - 1; i >= 0; i--) {
        rev += reverseList[i];
        //newArr.push(list[i]);
    }
    return rev;
}
console.log(reverse(reverseList));
/*
var length1 = {
    a1: ['dhsd', 'sjdkwaq', 'zxxzxds', 'yzyxyxyveds'];
    findLongest: function() {
        var longest = '';
        for (var i = 0; i < this.a1.length.length; i++) {
            if (this.a1.length.length)
        }
    }
}
var length2 = {
    a2: ['gshshs', 'jdhwwss', 'zxxywessq', 'xyxyxyqwsss'];
}
*/

grocery = ['apple', 'potato', 'tomato', 'onion'];
console.log(grocery);
grocery.push('eggplant');
console.log(grocery);
grocery.unshift('meat');
console.log(grocery);
grocery.shift('meat', );
console.log(grocery);
grocery.pop();
console.log(grocery);
/*
var sportsCar = {
    type: 'converter',
    color: 'Red',
    year: 2019,
    sound: 'Wooorrrrrr'
    carfunct: function() {
        return 'Sound of car is like beast animal' + this.sound;
    }
};

*/

;






/*
var arr = ['dhsd', 'sjdkwaq', 'zxxzxds', 'y11zyxyxyveds'];
var a2 = ['gshshs', 'jdhwwss', 'zxxywessq', 'xyxyxyqwsss'];

function longestword(arr) {
    var lgth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
        }
    }
}
console.log(arr('dhsd', 'sjdkwaq', 'zxxzxds', 'y11zyxyxyveds'));
*/


function solution(number) {
    var sumofNumbers = 0;

    for (var i = 0; i < number.length; i++) {

        if (number[i] % 3 == 0 || number[i] % 5 == 0) {
            sumofNumbers = sumofNumbers + number[i];
        }
    }
    return sumofNumbers;
}


number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(number));

console.log(5 % 3);










/*
//data types 'numbers'
Math.PI
34
console.log(Math.PI);

console.log(9 % 5);


function mod(a, b) {
    console.log(mod(9, 5));
}

//NaN = not a number, 
// math.random()   returns a daa floating value from 0 to 1
//adding a * followed by a number at the end of math.random() will give you random numbers
//from 0 to (but not including) the number you specified
Math.random() * 5

//Math.floor(math.random()*3) returns an integer (as opposed to a floating)less thab the number you specified after the *
Math.floor(Math.random() * 100)


console.log(('5' - 1) > 3 && (('10' + 1) > 100))


Nan == Nan // false

function areaOfSquare(widthS, lengthS) {
    widthS * lengthS
}
console.log(areaOfSquare(15, 35));
*/