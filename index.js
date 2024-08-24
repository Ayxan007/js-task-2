// function coupleNumbers() {
//     for (let i = 0; i <= 10; i += 2) {
//       console.log(i);
//     }
//   }
//     coupleNumbers();


// for (let i = 1; i <= 10; i++) {
//     let res = 1 + ' x ' + i + ' = ' + i * 1
//     console.log(res);

//     for (let j = 0; j < 10; j++) {

//     }
// }


// function convertKilometersToMiles(kilometers) {
//     return kilometers *  0.621;
// }


// const kilometers = 20;
// const miles = convertKilometersToMiles(kilometers);
// console.log(`${kilometers} kilometers is equal to ${miles} miles.`);


// function sumArray(arr) {
//     var total = 0;
//     for (var i = 0; i < arr.length; i++) {
//       total += arr[i];
//     }
//     return total;
//   }
//   var numbers = [13, 24, 6, 7];
//   var result = sumArray(numbers);
//   console.log(result); //Output=50


// function reverseArr(input) {
//     var ret = new Array;
//     for(var i = input.length-1; i >= 0; i--) {
//         ret.push(input[i]);
//     }
//     return ret;
// }

// var a = [13,24,7,6]
// var b = reverseArr(a);

// console.log(b);


// var numArray = [826, 835, 99, 50];
// numArray.sort(function(a, b) {
//   return a - b;
// });

// console.log(numArray);

// var arr = [2, 3.5, 5.5, 3, 4.4, 5 , -7];

// function filtrate(el) {
//   return (parseInt(el, 10) === el) && el > 0;
// }

// console.log(arr.filter(filtrate));


// var str = "    Yamaha R7!";
// var res = str.replace(/^[ ]+/g, "");
// console.log(res);


// const booleanNum = (num) => {
//   return num % 10
// }
// console.log(booleanNum(20));

// function getVowels(string) {
//     let Vowels = "aAeEiIoauU";
//     let vowelsCount = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (Vowels.indexOf(string[i]) !== -1) {
//             vowelsCount += 1;
//         }
//     }
//     return vowelsCount;
// }
// console.log(
//     "The Number of vowels in -" +
//         " A Computer Science Portal for Geeks:" +
//         getVowels(
//             "A Computer Science Portal for Geeks"
//         )
// );