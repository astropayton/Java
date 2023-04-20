// make a const of my input
// make a loop to pull the odd nubers out 
// print only the odd numbers 
// then we are going to repete this prosses for all inputs 

// [2, 4, 6, 8, 11, 20, 15, 22]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [70, 42, 55, 81, 21, 91, 34]
// [2, 4, 6, 8, 10, 11, 12] 

const numbers1 = [2, 4, 6, 8, 11, 20, 15, 22]
const odds = [];
for (const num of numbers1) {
  if (num % 2 === 1) {
    odds.push(num);
  }
}
console.log(odds); 

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const odds2 = [];
for (const num of numbers2) {
    if (num % 2 === 1) {
        odds2.push(num);
    }
}
console.log(odds2);

const numbers3 = [70, 42, 55, 81, 21, 91, 34] 
const odds3 = [];
for (const num of numbers3) {
    if (num % 2 === 1) {
        odds3.push(num);
    }
}
console.log(odds3);

const numbers4 = [2, 4, 6, 8, 10, 11, 12]
const odds4 = [];
for (const num of numbers4) {
    if (num % 2 === 1) {
        odds4.push(num);
    }
}
console.log(odds4);

// make a string that picks out the vowles 
//making a loop to pick out the vowels and consanants
// have the loop pick out the vowels and add 1 have eveything else go to consanants
// console log the string 


const vowelsandconsanants = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u',]
    let vowel = 0;
    let consanants = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
        vowel++;
        } else {
            consanants++;
        }

    }
    return `${str} consanants ${consanants} vowels ${vowel}`
}
const String = vowelsandconsanants('textbook')
console.log (String)

// make a loop 
//make a push move to push to the back till its reversed 
// print out loop/string 




const array = (arr) => {
    const array2 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        array2.push(arr[i])
    }

    return array2;
}
console.log(array([1, 2, 3]));

//making a loop to have i to equel 1 and go up to 100
// having 3s = fizz
//having 5 = buzz
// having 5 and 3 = fizzbuzz



const fizzbuzz = () => {
    for (let i = 1; i <= 100; i++)
     if (i % 5 === 0 && i % 3 === 0) {
        console.log('Fizzbuzz', i)
    }
     else if (i % 3 === 0) {
        console.log('fizz', i)
    }
    else if (i % 5 === 0) {
        console.log('buzz', i)
    }
}
fizzbuzz();