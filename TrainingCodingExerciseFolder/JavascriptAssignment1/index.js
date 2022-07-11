// 1. Write a JavaScript function that reverse a number.

const reverseNums = (nums) => {

    let number = nums;

    let arr = String(number).split('').reverse().join('')

    // console.log(arr)

}

 

reverseNums(32243);

 

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?

// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const palindrome = (input) => {

    // let joined = input.split('')

    // joined.forEach((letter, index) => {

    //     if(letter === ' '){

    //         joined += joined.splice(index, 1).join('')

    //     }

    // });

    // console.log(joined)

   const reversed = input.split('').reverse().join('')

   if(reversed === input){

    // console.log('palindrome');

   } else {

    // console.log('not a palindrome')

   }

}

 

palindrome('nursesrun');

 

// 3. Write a JavaScript function that generates all combinations of a string.

 

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

const inOrder = (word) => {

    let arr = word.split('');

    let sorted = arr.sort().join('')

    // console.log(sorted)

}

 

inOrder('webmaster')

 

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// Example string: 'the quick brown fox'

// Expected Output: 'The Quick Brown Fox '

 

function words(words){

    const arr = words.split(' ')

    let upperCasedArr = [];

    arr.forEach(element => {

        // slice will return whatever number you want such as return index 1 to the end

       let upperCased = element[0].toUpperCase() + element.slice(1)

        upperCasedArr.push(upperCased)

    });

 

    // console.log(upperCasedArr.join(' '))

}

 

words('i love cats' )

 

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

// Example string: 'Web Development Tutorial'

// Expected Output: 'Development'

 

function longestWord(words){

    let arr = words.split(' ');

    let longest = ' ';

    arr.forEach(word => {

        if(word.length > longest.length) longest = word;

    })

  

    // console.log(longest)

 

}

//from what my understanding is.... it loops through each word

//first word goes into the longest because word.length is greate than the longest.length

//2 goes to development.. it checks if development is greater than web? yes.

//then finally it gets to tutorial and it check if tutorial is greater than development? no

//therefore it returns development

 

longestWord('Web Development Tutorial')

 

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

// Example string: 'The quick brown fox'

// Expected Output: 5

 

function acceptVowel(words){

    const vowels = ['a', 'e', 'i', 'o', 'u']

    let vowelCount = 0;

 

    for(let char of words){

        if(vowels.includes(char)){

            vowelCount++;

           

        }

    }

    // return vowelCount;

    // console.log(vowelCount)

  

 

}

 

acceptVowel('The quick brown fox')

 

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

 

// 9. Write a JavaScript function which accepts an argument and returns the type.

// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

 

function types(values){

    // console.log(typeof values)

}

 

types('a')

 

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

 

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

// Sample array: [1,2,3,4,5]

// Expected Output: 2,4

 

function returnSecondHighest(numbers){

    let arr = String(numbers).split('');

 

    let left = 0;

    let right = arr.splice(-1);

 

    let takeOutLeft = arr.splice(left, 1)

    let takeOutRight = arr.splice(right);




    // console.log('min: ', Math.min(...arr))

    // console.log('max: ', Math.max(...arr))

}

 

returnSecondHighest(123456789)

 

// 12. Write a JavaScript function which says whether a number is perfect.

// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

 

// 13. Write a JavaScript function to compute the factors of a positive integer.

function factors(numbers){

    let output = [];

    for(let i = 0; i < numbers; i++){

        if(numbers % i == 0){

            output.push(i);

        }

    }

 

    console.log(output)

}

 

factors(42)

 

// 14. Write a JavaScript function to convert an amount to coins.

// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])

// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.

// Output: 25, 10, 10, 1

 

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

 

// 16. Write a JavaScript function to extract unique characters from a string.

// Example string: "thequickbrownfoxjumpsoverthelazydog"

// Expected Output: "thequickbrownfxjmpsvlazydg"

 

function occurrences(word){

    let letters = word.split('')

    let count = [];

    letters.forEach(letter => {

        count[letter] = count[letter] ? (count[letter] + 1) : 1

    })

    // return count;

    console.log(count)

}

 

occurrences("thequickbrownfoxjumpsoverthelazydog")

 

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

// function occurrences(word){

//     let letters = word.split('')

//     let count = [];

//     letters.forEach(letter => {

//         count[letter] = count[letter] ? (count[letter] + 1) : 1

//     })

//     return count;

//     console.log(count)

// }

 

// occurrences("hello")

// 18. Write a function for searching JavaScript arrays with a binary search.

// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

 

// function binarySearch(values, target){

//     const arr = String(values).split('')

 

//     let left = 0;

//     let right = arr.length-1;

//     while(left <= right){

//        let mid = Math.floor((left + right) / 2)

//        if(target === arr[mid]){

//            console.log(mid)

//        }

 

//    }

  

// }

 

var search = function(nums, target) {

    let left = 0;

    let right = nums.length - 1;

   

    while(left <= right){

        const middle = Math.floor((right + left) / 2);

   

        

        // if(target === nums[middle]) console.log(middle);

         

        if(nums[left] <= nums[middle]){

            if(nums[left] <= target && target <= nums[middle]) right = middle - 1;

            else left = middle + 1;

        }

       

       

    }

     return -1;

};

 

search([1,2,3,4,5], 2)

 

// 19. Write a JavaScript function that returns array elements larger than a number. do you mean any??

function biggerElements(values, target)

   {

    //  console.log(values.filter(num => num > target))

   }

biggerElements([1, 40, 3, 5, 10], 4)

 

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.

// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

 

// 21. Write a JavaScript function to get all possible subs

// et with a fixed length (for example 2) combinations in an array.

// Sample array: [1, 2, 3] and subset length is 2

// Expected output: [[2, 1], [3, 1], [3, 2]]

 

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

// Sample arguments: 'microsoft.com', 'o'

// Expected output: 3

 

function twoArguments(words, letter){

    let letters = 0;

    const arr = words.split('')

    arr.filter(char => {

        if(char === letter){

            letters++;

        }

    } )

  

    // console.log(letters)

}

twoArguments('microsoftooo.com', 'o' )

 

// 23. Write a JavaScript function to find the first not repeated character.

// Sample arguments: 'abacddbec'

// Expected output: 'e'

 

function twoArguments(words, letter){

    let letters = 0;

    const arr = words.split('')

    arr.filter(char => {

        if(char === letter){

            letters++;

        }

    } )

  

    // console.log(letters)

}

twoArguments('microsoftooo.com', 'o' )

 

// 24. Write a JavaScript function to apply Bubble Sort algorithm.

// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".

// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]

// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

 

function sorting(values){

    const sorted = values.sort((a,b) => a - b)

 

    // console.log(sorted.reverse())

 

}

sorting([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])

// Expected output: "United States of America"

 

function longestCountryName(country){

    let longest = '';

    country.forEach(countryName => {

        if(countryName.length > longest.length) return longest = countryName;

    })

 

    // console.log(longest)

}

 

longestCountryName(["Australia", "Germany", "United States of America"])

 

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

 

// 27. Write a JavaScript function that returns the longest palindrome in a given string.

// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".

// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

 

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

 

function passFunction(callback){

    callback()

}

function sums(){

    // console.log('hello')

}

 

passFunction(sums)

 

// 29. Write a JavaScript function to get the function name.