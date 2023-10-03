/*
An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML 
attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.
*/

const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'

//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove('title', 'header-title')