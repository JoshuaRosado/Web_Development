// Remove Blanks

// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"




// function removeBlanks(str){
//     //make a new string initialized to a blank string
//     let newStr = ' '
//     //loop through the give string
//     for(let i = 0; i < str.length; i++){
//         //if current character is not a space
//         if(str[i] != ' ') {
//              //then concatenate with new string
//             newStr += str[i]
//         }
//     }
//             // return new string
//     return newStr
// }

// console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))
// console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))

// SECOND WAY OF DOING IT !!!!!!!!!!!!!!!!!

function removeBlanks(str){
    //make a new string initialized to a blank string
    let newStr = ' '
    //loop through the give string
    for(let char in str){
        //if current character is not a space
        if(str[char] != ' ') {
             //then concatenate with new string
            newStr += str[char]
        }
    }
            // return new string
    return newStr
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))








// Get Digits

// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680


function getDigits(str){
    //make a new string
    let newNumStr = ' '
    //for char in string
    for(let char in str){
        //if character is a number
        if(!isNaN(str[char])){
            //concatenate into a new string
            newNumStr += str[char]
        }
    }
    //turn our string into number
    //return new string(number)
    return Number(newNumStr)
}

console.log(getDigits("abc8c0d1ngd0j0!8"))
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))










// Acronyms

// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".



function acronym(str){
    let wordsArr = str.split(' ')
    let acronymStr = ' '
    // Loop through wordsArr
    for(let word in wordsArr) {
        //Grab the first letter of the word
        if (wordsArr[word].length > 0){
            acronymStr += wordsArr[word][0].toUpperCase()
        }
    }
        
            //Transform that first letter into uppercase
            // concatenate that letter into an acronym string
    return acronymStr
}


console.log(acronym(" there's no free lunch - gotta pay yer way. "))
console.log(acronym("Live from New York, it's Saturday Night!"))








// Count Non-Spaces

// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11


function countNonSpaces(str){
    // initialized counter variable
    let counter = 0
    // loop through string
    for(let char in str){
        //if character is not a space
        if(str[char] != ' '){
            //increment counter
            counter ++
        }
    }
    // return counter
    return counter
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))
console.log(countNonSpaces("Hello world !"))












// Remove Shorter Strings

// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']


function removeShorterStrings(arr, len){
    // initialize new array
    let newStrings = []
    // initialize a NextIndex variable
    let nextIndex = 0
    // loop through the given array
    for(let value in arr){
        // if value is greater or equal to len
        if(arr[value].length >=len) {
            //add value to new array
            newStrings[nextIndex++] = arr[value]

        }
    }
    //return new array
    return newStrings
}


console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))