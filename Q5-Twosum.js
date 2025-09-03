/**
  * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  * You may assume that each input would have exactly one solution, and you may not use the same element twice.
  * You can return the answer in any order.
  * Input: nums = [2,7,11,15], target = 9, Output: [0,1]
 */
// Brute Force approach
const twoSum = (arr,target) => {
    for (let i = 0; i < arr.length; i++) { //i=0
        for (let j = i+1; j < arr.length; j++) { // j=1,,j=2, j=3
            if(arr[i]+arr[j]===target){
                return [i,j];
            }
        }
    }
}

//console.log(twoSum([2,7,11,15],9))
// Approach to improve time complexity
const twoSumNew = (arr,target) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        const n = arr[i];
        console.log('n--->',n);
        console.log('i--->',i);
        console.log(obj[target-n]); // complimenting number 
        /**
         * { 'n': i
         *  '2':0, 
        *   '7': 1,
        *   '11': 2,
        *    in case of 15 it got 11 as key and value as 2 which is >0
         * }
         * 
         */
        if(obj[target-n] >= 0){ // if complimenting number as a key present in object it will return the output otherwise just assign the index as value to each number as a key
            return [obj[target-n], i]
        }else {
            obj[n] = i
        }
    }
}

twoSumNew([2,7,11,15],26)