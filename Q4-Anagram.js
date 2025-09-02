// Problem statement: Fing teh given word is anaagram or not?
/**
 * NOTE: An anagram is a word/phrase formed by rearranging the letters of a different word or phrase using all teh letters excatly once
 * INPUT: (s: 'anagram'),(t: 'nagaram') , OUTPUT:  true
 * (ACT,CAT) (LISTEN,SILENT)
 */

// 1st Approach
const isAnagram = (x,y) => {
    x = x.split('').sort().join('')
    y = y.split('').sort().join('')
    return x === y;
}

// console.log(isAnagram('anagram', 'nagaram'));

// 2nd approach
const isAna = (s,t) => {
    if(s.length !== t.length){
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
    for (const key in obj1) {
        if(obj1[key] !== obj2[key]){
            return false;
        }
        console.log('came here');
    }
    return true;
}
console.log(isAna('rat','tar'));