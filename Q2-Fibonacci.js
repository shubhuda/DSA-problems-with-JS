// Problem Statement: Find the value of the nth position number in Fibonacci sequence, Given n calculate F(n)
/**
 * Fibonacci series: 0,1,1,2,3,5,8,13,21,34.....
 * F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)= 3, F(5)=5, F(6)=8, F(7)=13
 * F(n) = F(n-1) + F(n-2) n>1
 */

const fab = (n) => {
    const arr = [0,1]
    for (let i = 2; i <=n; i++) {
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr[n];
}

console.log(fab(5));

const fib = (n) => n<=1? n: fib(n-1)+fib(n-2);
