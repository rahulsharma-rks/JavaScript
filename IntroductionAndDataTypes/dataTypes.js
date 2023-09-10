let fname ="rahulk"
lname = "lastname"
const pi = 3.14

console.log(fname)
console.log(lname)
console.log(pi)

//Accessing  character
text1 = 'JavaScript'
firstChar = text1[0]
console.log(firstChar)

let lastIndex1 = text1.length - 1
console.log(lastIndex1)
console.log(text1[lastIndex1])

// charAt(): Takes index and it returns the value at that index
let text2 = "Character"
console.log(text2.charAt(0))

let lastIndex2 = text2.length - 1
console.log(text2.charAt(lastIndex2))

// charCodeAt(): Takes index and it returns char code(ASCII number) of the value at that index
let text3 = "AsCIICOde"
console.log(text3.charCodeAt(0))

// concat(): it takes many substrings and creates concatenation.
// string.concat(substring, substring, substring)
let text4 = "Java"
console.log(text4.concat("Script"))

// endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.endsWith(substring)
let text5 = 'JavaScript Code'
console.log(text5.endsWith('code'))
console.log(text5.endsWith('Code'))

/*
includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. 
It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.
*/
let text6 = 'Code for JavaScript'
console.log(text6.includes('code'))
console.log(text6.includes('JavaScript'))

//indexOf(): Takes takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
let text7 = 'IndexCode'
console.log(text7.indexOf('e'))
console.log(text7.indexOf('x'))

// lastIndexOf(): Takes takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
let text8 = 'Last Index Of'
console.log(text8.lastIndexOf('Of'))

// length: The string length method returns the number of characters in a string included empty space.
let text9 = 'LENGTH'
let text10 = ''
console.log(text9.length)
console.log(text10.length)

/*
match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. 
Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

g-means to search in the whole text, i - case insensitive
*/
let text11 = 'I write code in JavaScript'
let pattern1 = /code/
let pattern2 = /JavaScript/gi

console.log(text11.match('JavaScript'))

// repeat(): it takes a number argument and it returned the repeated version of the string.
// string.repeat(n)
let text12 = 'repeat'
console.log(text12.repeat(3))

// replace(): takes to parameter the old substring and new substring.
// string.replace(oldsubstring, newsubstring)
let text13 = 'PythonScript'
console.log(text13.replace('Python','Java'))

// search: it takes a substring as an argument and it returns the index of the first match.
// string.search(substring)
let text14 = 'Search in String'
console.log(text14.search('in'))

// split(): The split method splits a string at a specified place.
let text15 = 'Split Method'
console.log(text15.split(' '))

// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.startsWith(substring)
let text16 = 'Specified Substring'
console.log(text16.startsWith('Specified'))
console.log(text16.startsWith('Specifiedd'))

//substr(): It takes two arguments,the starting index and number of characters to slice.
let text17 = 'Slice'
console.log(text17.substr(1,3))

// substring(): It takes two arguments,the starting index and the stopping index but it doesn't include the stopping index.
let text18 = 'Argument'
console.log(text18.substring(1, 5))


// toLowerCase(): this method changes the string to lowercase letters.
let text19 = 'JAVASCRIPT'
console.log(text19.toLowerCase())

// toUpperCase(): this method changes the string to uppercase letters.
let text20 = 'javascript'
console.log(text20.toUpperCase())

//trim(): Removes trailing space in the beginning or the end of a string.
let text21 = ' JavaScript Code   '
console.log(text21.trim())

