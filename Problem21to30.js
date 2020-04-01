const fs = require('fs');

/*
Amicable Numbers
*/

const divisorsArr = (number) => {
    let divisors = [];
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            if (number / i === i) {
                divisors.push(i);
            } else {
                divisors.push(i);
                divisors.push(number / i);
            }
        }
    }
    return divisors;
}

const amicablePairs = () => {
    let sumDivisors = [0];
    let amicablePairsSum = 0;
    for (i = 1; i <= 10000; i++) {
        let divisors = divisorsArr(i);
        sumDivisors.push(divisors.reduce((elem, acc) => acc + elem, 1));
    }

    for (i = 1; i < sumDivisors.length; i++) {
        if (sumDivisors[sumDivisors[i]] === i && i !== sumDivisors[i]) {
            amicablePairsSum += (i + sumDivisors[i])
        }
    }
    console.log('Problem 21: Amicable Pair Sum:', amicablePairsSum / 2);
}

amicablePairs();

/*
Names Scores
*/

const nameScores = () => {
    let names;
    fs.readFile('./p022_names.txt', 'utf8', function (err, data) {
        names = data.split('","');
        names[0] = names[0].split("\"")[1];
        names[names.length - 1] = names[names.length - 1].split("\"")[0];
        names = names.sort();
        let nameScores = 0;
        for (let i = 0; i < names.length; i++) {
            let name = names[i];
            let sumChars = 0;
            for (let j = 0; j < name.length; j++) {
                sumChars += (name.charCodeAt(j) - 64);
            }
            nameScores += (sumChars * (i + 1));
        }
        console.log('Problem 22: Names Score is:', nameScores);
    });
};

nameScores();

/*
Non-abundant sums
*/

const abundantNos = (start, end) => {
    let abundants = [];
    while (start <= end) {
        let divisors = divisorsArr(start);
        let sumDivisors = divisors.reduce((elem, acc) => acc + elem, 1);
        if (sumDivisors > start) {
            abundants.push(start);
        }
        start++;
    }

    return abundants;
}

const abundantsSums = () => {
    let abundants = abundantNos(1, 20161);
    let abundantSums = [];
    for(let i=0;i<=20161;i++){
        abundantSums[i]=0;
    }
    for (let i = 0; i < abundants.length; i++) {
        for (let j = i; j < abundants.length; j++) {
            if((abundants[i]+abundants[j])<=20161){
                abundantSums[abundants[i]+abundants[j]] = 1;
            }
        }
    }
    return abundantSums;
}

const nonAbundantNosSums = () => {
    let abundantSums = abundantsSums();   
    let sunNonAbundantNos = 0;
    for (i = 1; i <= 20161; i++) {
        if(abundantSums[i]===0){
            sunNonAbundantNos += i;
        }
    }

    console.log("Problem 23: non-abundant numbers sum:",sunNonAbundantNos);
}

nonAbundantNosSums();

/*
Lexicographic Permutations
*/

const swap = (str, index1, index2) => {
    if(index1 == index2){
        return str;
    }
    let first = str.substring(0, index1);
    let second = str.substring(index1+1,index2);
    let third = (index2<str.length-1)?str.substring(index2+1,str.length):'';

    return  (first+str[index2]+second+str[index1]+third);
}

const permute = (input, left,right, arr) => {
    if(left === right){
        arr.push(input);
    }else{
        for(let i=left;i<=right;i++){
            //swap(left,i)
            let str = swap(input,left,i);
            permute(str, left+1,right,arr);
        }
    }
    return arr;
}

const printMillionthPermutation = () => {
    let arr = permute('0123456789', 0,9, []);
    arr= arr.sort();
    console.log('Problem 24: Lexicographic Permutations', arr[999999]);
}

printMillionthPermutation();

