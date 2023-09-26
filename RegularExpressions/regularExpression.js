/*
A regular expression or RegExp is a small programming language that helps to find pattern in data. A RegExp can be 
used to check if some pattern exists in a different data types. To use RegExp in JavaScript either we use RegExp 
constructor or we can declare a RegExp pattern using two forward slashes followed by a flag.

A regular expression takes two parameters. One required search pattern and an optional flag.

A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an 
email could be a pattern we are interested to look for in an email or a phone number format number might be our 
interest to look for.

Flags are optional parameters in a regular expression which determine the type of searching.
    g: a global flag which means looking for a pattern in whole text
    i: case insensitive flag(it searches for both lowercase and uppercase)
    m: multiline
*/

//WithOut Flag
let pattern = "WithOutFlagPattern"
let regExp1 = new RegExp(pattern)

//With Flag
let pattern1 = 'WithFlagPattern'
let flag = 'Pa'
//let regExp2 = new RegExp(pattern1, flag);

//With RegExp Object
//let regExp3 = new RegExp('ObjectPattern','Pa')

//Test for Match -> test():Tests for a match in a string. It returns true or false.
const str = 'Test for Match in RegExp'
const pattern2 = /Match/
const resultTest = pattern2.test(str)
console.log(resultTest)

/*
match():Returns an array containing all of the matches, including capturing groups, or null if no match is found.
If we do not use a global flag, match() returns an array containing the pattern, index, input and group.
*/

const str1 = 'Match for Array in RegExp'
const pattern3 = /for/g
//const resultMatch = str1.match(pattern3)
const resultSearch = str1.search(pattern3)
console.log(resultSearch)

const str2 = 'Replace it using Match'
resultReplace = str2.replace(/Match/, 'Replace')
console.log(resultReplace)



const pattern4 = '[Aa]pple' // this square bracket means either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern4)

console.log(matches)  

