// program 1
// program to print 1 to 100 numbers with some conditions

let i;
for(i=1;i<=100;i++){
    if(i%3==0 && i%5==0)
        console.log("FizzBuzz");
    else if(i%3==0)
        console.log("Fizz");
    else if(i%5==0)
        console.log("Buzz");
    else
        console.log(i);
}

//program 2
// palindrome or not

function ispalindrome(str){
    let str2="";
    for(i=str.length-1;i>=0;i--){
        let c=str.charAt(i)
        str2=str2+c;
    }
    if(str==str2)
        return "palindrome";
    else
        return "not a palindrome";
}
console.log("the word radar is :")
console.log(ispalindrome("radar"));

//program 3
// largest element in array

function findLargest(arr){
    arr.sort();
    let l=arr.length-1;
    return arr[l];
}
let a=[10,40,50,90,30,60,25];
console.log(a);
console.log(findLargest(a));

//program 4
//Write a function that takes a string and returns an object with each character as a key and its number of occurrences as the value.

function state(str){
    for(i=0;i<str.length;i++){
        let count=0;
        for(j=0;j<str.length;j++){
            if(str[i]==str[j])
                count++;
        }

        // unique charcters
        
        // for(k=0;k<i;k++){
        //     if(str[i]==str[k])
        //         break;
        // }
        // if(i==k){
            console.log(str[i]+" : "+count);
        // }
    }
}
console.log("for the word : mahabharatham");
state("mahabharatham");


//program 5
//Write a function that takes a string and returns the longest word in the string.

function longestWord(str){
    let wcount=0;
    let last=0;
    let str2="";
    let lword="";
    for(i=0;i<str.length;i++){
        if(str[i]!=' '){
            wcount++;
            str2=str2+str[i];
        }
        else{
            if(wcount>last){
                last=wcount;
                lword=str2;
            }
            str2="";
            wcount=0;
        }
    }
    return lword;
}
console.log("The longest word in : hi vanakam hello")
console.log(longestWord("hi vanakam hello"));

//program 6
// factorial

function factorial(num){
    let fact=1;
    if(num==1)
        return 1;
    else
        fact=num*factorial(num-1);

    return fact;
}
console.log("The factorial of 6 is:")
console.log(factorial(6));

//program 7
// Write a function that converts a temperature from Celsius to Fahrenheit.

function toFahrenheit(cel){
    let val= (9/5)*cel+32;
    return val;
}
console.log("100 degree celsius in farhenheit is :")
console.log(toFahrenheit(100));

//program 8
//Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

function missNumber(arr){
    for(i=0;i<=arr.length;i++){
        if (arr[i]==i)
            continue;
        else
            console.log(i+" is missing in array.");
            break;
    }
}

let arr=[0,1,2,3,4,5,6,8,9];
console.log(arr);
missNumber(arr);