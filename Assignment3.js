//1.Do the below programs in anonymous function and IIFE:
//a). print odd numbers in an array:
//Anonymous:
function (array){
    for (var i=0; i<array.length; i++){
        if(array[i]%2!=0){
            console.log(array[i])
        }
    }
}
//IIFE:
(function(array)){
    for(var i=0; i<array.length; i++){
        if(array[i]%2!=0){
            console.log(array[i])
        }
    }
}
//b).convert  all the strings to titlecaps in a string array:
// Anonymous:
function(str) {
    str = str.toLowerCase().split('');
    for (var i=0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
//IIFE:
(function(str)) {
    str = str.toLowerCase().split('');
    for(var i=0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
    }
//C).Sum of all numbers in an array:
//Anonymous:
function(array){
    var sum = 0;
    for( var i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}
//IIFE:
(function (array)){
    var sum = 0;
    for (var i=0; i<array.length; i++){
        sum = sum + array[i];
}
return sum;
}
//d).Return all the prime numbers in an array:
//Anonymous:
function(array){
    numArray = numArray.filter((number)) =>{
        for(var i=2; i<= Math.sqrt(number); i++) {
            if (number % i===0) return false;
        }
        return true;
     }
console.log(numArray);
}
//IIFE:
(function(numArray)){
    numArray =numArray.filter((number))=>{
        for (var i=2; i<=Math.sqrt(number); i++){
            if (number % i===0) return false;
 }
        return true;
    }
console.log(numArray);
}
//E).Return all palindromes in an array:
//Anonymous:
function (arr,n) {
for (let i=0; i<n; i++)
{
    let ans = isPalindrome(arr[i]);
    if (ans == false)
    return false;
}
return true;
}
//IIFE:
(function (arr, n)){
    for (let i=0; i<n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
        return false;
    }
    return true;
}
//F).Remove duplicates in an array:
//Anonymous:
function(array){
    let dup = [...new Set(array)];
    console.log(dup);
}
//IIFE:
(function(array)){
    let dup = [...new Set(array)];
    console.log(dup);
}
//G).Rotate an array by K times:
//Anonymous:
function(array, k){
    k = k % arguments.length;
    if(k < 0){
        k +=arguments.length;
    }
    reverse(a, 0, a.length-k-1);
    reverse(a, a.length-k, a.length-1);
    reverse(a, 0, a.length-1);
}
//IIFE:
(function(array, k)){
    k = k % a.length;
    if(k<0){
        k+=a.length;
    }
    reverse(a, 0, a.length-k-1);
    reverse(a, a.length -k, a.length -1);
    reverse(a, 0, a.length -1);
    }
// 2.Do the below programs in arrow functions:
//A).Print odd numbers in an array:
oddNumbers = (array) =>{
    for (var i=0;i<array.length;i++)
    if(array[i]%2!=0){
        console.log(array[i])
    }
}
//B).Convert all the strings to the title caps in a string array:
titleCase = (str) =>{
    str = str.toLowerCase().split('');
    for (var i=0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
    }
//C). Sum of all numbers in an array:
sum = (array) =>{
    var sum = 0;
    for (var i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}
//D).Return all the prime numbers in an array:
PrimeNumber = (numArray) =>{
    numArray =numArray.filter((number)) => {
        for (var i=2; i<=Math.sqrt(number); i++);
        if (number % i===0) return false;
    }
    return true;
    console.log(numArray);
    }
//E). Return all the palindromes in an array:
Palindrome (arr, n) =>
{
    for (let i=0; i<n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
        return false;
    }
    return true;
}
