const multiple3and5 = () => {
    let sum =0;
    for(let i= 3;i<1000;i++){
        if(i%3===0 || i%5 === 0){
            sum +=i;
        }
    }
    console.log('Problem 1: The sum of all the multiples of 3 or 5 below 1000 is:',sum);
}

multiple3and5();


/*
Even Fibonacci numbers
Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million,
find the sum of the even-valued terms.
*/


const evenFibonacciNumbersSum = () => {
    let first =1, second=2, finalSum =2;

    while(second < 4000000){
        let sum = first + second;
        first = second;
        second = sum;
        if(second%2 ===0){
        finalSum += second;
        }
    }

    console.log('Problem 2: Even Fibonacci Numbers sum is:', finalSum);
}

evenFibonacciNumbersSum();

/*
Largest Prime Factors:
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

const primes = (no) => {
    let primeNumbers =[2];
    for(i =3;i<=no;i=i+2){
        let isPrime = true;
        for(let j=0;j< primeNumbers.length;j++){
            if(i%primeNumbers[j] === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}

const primeFactors = (no) => {
    const allPrimes = primes(Math.sqrt(no));
    for(let i = allPrimes.length-1;i>0;i--){
        if(no%allPrimes[i] === 0){
            console.log(`Problem 3: largest prime factor of the number ${no} is: ${allPrimes[i]}`);
            break;
        }
    }
}

primeFactors(600851475143);


/*
Largest palindrome product:
A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
const isPalindrome = (no) => {
    let stringNo = no.toString().split('');
    let isPalindrome = true;
    let start =0, end = stringNo.length-1;
    while(start<end){
        if(stringNo[start]!== stringNo[end]){
            isPalindrome = false;
            break;
        }
        start++;
        end--;
    }

    return isPalindrome;
}

const factorsOfNo = (no) => {
    let factors =[];
    for(let i=2;i<Math.sqrt(no);i++){
        if(no%i ===0 ){
            factors.push(i,no/i);
        }
    }

    return factors;
}

const largestPalindromeProduct = () => {
    
    for(let i=999*999;i>10000;i--){
        if(isPalindrome(i)){
            const factors = factorsOfNo(i);
            let firstNumber = factors[factors.length-1];
            let secondNumber = factors[factors.length -2];
            if(firstNumber >=100 && firstNumber<=999 && secondNumber>=100&& secondNumber<=999){
                console.log('Problem 4: Largest palindrome product is: '+i);
                break;
            } 
        }
        
    }
}

largestPalindromeProduct();

/*
Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const primeFactorsAsMap = (no) => {
    let primeNumbers = primes(no);
    let factors ={};
    for(let i=0;i<primeNumbers.length;i++){
        if(no%primeNumbers[i] == 0){
            let number = no;
            while(number%primeNumbers[i] ===0){
               if(factors[primeNumbers[i]]===undefined){
                   factors[primeNumbers[i]] = 1;
               }else{
                   factors[primeNumbers[i]] +=1;
               }
               number = number/primeNumbers[i];
            }
        }
    }
    return factors;
}

const smallestNoDivisible = (limit) => {
    const primeNumbers = primes(limit);
    let map ={};
    let no =1;
    for(let i=0;i<primeNumbers.length;i++){
        map[primeNumbers[i]] = 1;
    }

    for(let i=2;i<=limit;i++){
        if(!map[i]){
            const primefactor = primeFactorsAsMap(i);
            let keys = Object.keys(primefactor);
            for(let j=0;j<keys.length;j++){
                map[keys[j]] = map[keys[j]]>primefactor[keys[j]]?map[keys[j]]:primefactor[keys[j]];
            }
        }
    }
    let keys = Object.keys(map);
    for(let i=0;i<keys.length;i++){
        let multiple = 1;
        let j=map[keys[i]];
        let val = parseInt(keys[i])
        while(j--){
            multiple *= val
        }
        no *=multiple;
    }
    console.log('Problem 5: Smallest Multiple is: ', no);
}

smallestNoDivisible(20);

/*
Sum square difference:
The sum of the squares of the first ten natural numbers is,

12+22+...+102=385
The square of the sum of the first ten natural numbers is,

(1+2+...+10)2=552=3025
Hence the difference between the sum of the squares of the first ten natural numbers 
and the square of the sum is 3025−385=2640.

Find the difference between the sum of the squares of the first one hundred natural numbers 
and the square of the sum.
*/

/*
Notes:
sum of n natural numbers = n*(n+1)/2
sum of n^2 natural numbers = n*(n+1)(2n+1)/6
*/

const sumNaturalNumbers = (n) => {
    return n*(n+1)/2;
}

const sumSqauresNaturalNumbers = (n) => {
    return n*(n+1)*(2*n+1)/6;
}

const sumSquareDifference = (n) => {
    let sumNatural = sumNaturalNumbers(n);
    sumNatural = sumNatural*sumNatural;
    console.log('Problem 6: Sum Sqaure Difference is:',sumNatural - sumSqauresNaturalNumbers(n));
}

sumSquareDifference(100);

/*
10001st prime:

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

const prime10001 = () => {
    let primeNumbers =[2];
    let i=3;
    let length =1;
    while(length<10001){
        let isPrime = true;
        for(let j=0;j< primeNumbers.length;j++){
            if(i%primeNumbers[j] === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primeNumbers.push(i);
            length++;
        }
        i =i +2;
    }

    console.log('Problem 7: 10001th Prime number is:', primeNumbers[10000]);
}
prime10001();

/*
Largest product in a series
*/
const largestProduct = () => {
    const number = `73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450`;

    let  numberArr = number.split('\n').join('').split('');
    numberArr = numberArr.map(elem => parseInt(elem));
    let maxProduct = 1;
    for(let i=0;i<13;i++){
        maxProduct *= numberArr[i];
    }
    for(let i=1;i<1000-12;i++){
        let product = 1;
        for(let j=0;j<13;j++){
            product *= numberArr[i+j];
        }
        maxProduct = maxProduct>product?maxProduct:product;
    }
    console.log('Problem 8: Max Product:', maxProduct);
    
}

largestProduct();

/*
Special Pythagorean triplet:   
*/

/*
note:
       a = m2 - n2
       b = 2 * m * n
       c  = m2 + n2
because,
       a2 = m4 + n4 – 2 * m2 * n2
       b2 = 4 * m2 * n2
       c2 = m4 + n4 + 2* m2 * n2
*/
const pythagoreanTriplet = () => {
    let i=3;
    let found = false;
    while(!found){
        
    }
}