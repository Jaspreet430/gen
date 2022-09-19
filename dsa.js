// function  binarySearch(arr, elem){
//     let start = 0
//     let end = arr.lenght - 1
//     let middle = Math.floor((start + end) / 2)
//     while(arr[middle] !== elem ){
//         if (elem < arr[middle]){
//             end= middle - 1
//         } else{
//             start = middle+ 1
//         }
//         middle = Math.floor((start + end)/2)
//     }
// }
// // console.log(binarySearch([1,254,81,66,79,6,78,84,61,99,46,796,5] ,81))


// function addition( a, b){
//     let num = a + b
// return num
// }
// addition(5,9);



// let map = new Map ()
// map.set('navin', 'java');
// map.set('jas', 'javascript');
// map.set('nav', 'python');

// // console.log(map)
// // console.log(map.keys());
// console.log(map.values());


// console.log('welcome')

// setTimeout(function(){
//     console.log('get out')
// }, 2000);

// function x(){
//     function y (){
//         console.log('in y');
//     }
//     console.log('in x')
//     y();
// }
// // x();


// function add (a,b , handle)
// {
//     let result = a + b
//     handle(result)
// }

// function print(result)
// {
//     console.log(result)
// }

// add (4, 9,print)


// iterators - meaning travelling through array and invoking single array at one time

let array = [1,2,3,4,5];

let arr = array[Symbol.iterator]();
console.log(arr.next());
// console.log(firstValue);
console.log(arr.next());
console.log(arr.next());

//generators - stoping other console.log to execute untill signal is provided