/*
Document Object Model (DOM)

HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help 
to manipulate it. It is possible to get, create, append or remove HTML elements using JavaScript. Selecting HTML 
element using JavaScript is similar to selecting using CSS. To select an HTML element, we use tag name, id, class 
name or other attributes.

*/


<html lang="en">
    <head>
      <title>Document Object Model(DOM)</title>
    </head>
    <body>

     <h1 class='title' id='first-title'>DOM Title1</h1>
     <h1 class='title' id='second-title'>DOM Title2</h1>
     <h1 class='title' id='third-title'>DOM Title3</h1>
     <h1></h1>

    </body>
</html>

/*
getElementsByTagName():takes a tag name as a string parameter and this method returns an HTMLCollection object. 
An HTMLCollection is an array like object of HTML elements. The length property provides the size of the collection. 
Whenever we use this method we access the individual elements using index or after loop through each individual items. 
An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.

// syntax
document.getElementsByTagName('tagname')
*/

const allTitles71 = document.getElementsByTagName('h1')

console.log(allTitles71) 
console.log(allTitles71.length) 

for (let i = 0; i < allTitles71.length; i++) {
  console.log(allTitles71[i]) 
}

/*
getElementsByClassName() method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements.
The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements.

//syntax
document.getElementsByClassName('classname')
*/

const allTitles72 = document.getElementsByClassName('title')

console.log(allTitles72) 
console.log(allTitles72.length) 

for (let i = 0; i < allTitles72.length; i++) {
  console.log(allTitles72[i]) 
}



/*
getElementsById() targets a single HTML element. We pass the id without # as an argument.

//syntax
document.getElementById('id')
*/

let firstTitle3 = document.getElementById('first-title')
console.log(firstTitle3) 

/*
querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.
*/

let firstTitle4 = document.querySelector('h1') 
let firstTitle5 = document.querySelector('#first-title') 
let firstTitle6 = document.querySelector('.title') 

/*
querySelectorAll: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array 
methods. We can use for loop or forEach to loop through each nodeList elements.
*/

const allTitles7 = document.querySelectorAll('h1') // selects all the available h1 elements in the page

console.log(allTitles7.length) // 4
for (let i = 0; i < allTitles7.length; i++) {
  console.log(allTitles7[i])
}

allTitles7.forEach(title => console.log(title))
const allTitles8 = document.querySelectorAll('.title') // the same goes for selecting using class