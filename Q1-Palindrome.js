// Problem statement: Find out whether the number given is Palindrome or not?
// Note: An integer is a palindrome if it reads the same backward and forward

const isPalindrome = (x) => {
    // split() => str.split(separator, limit); returns a new array containing the substrings. The original string remains unchanged.
    // if you put + operator in front of string, it converts to a Number only if it is actually a number inside the string , otherwise it will give NaN.
    // join() => concatenate all elements of an array into a single string. It returns a new string and does not modify the original array. converts each element into string first then concat

    return x === +x.toString().split('').reverse().join('');

}

const res = isPalindrome(121);
console.log(res);
