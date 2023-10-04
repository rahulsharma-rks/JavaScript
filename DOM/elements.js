/*
To create an HTML element we use tag name. Creating an HTML element using JavaScript is very simple and straight forward. 
We use the method document.createElement(). The method takes an HTML element tag name as a string parameter.

// syntax
document.createElement('tagname')
*/

<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>

    <script>
        let title = document.createElement('h1')
        title.className = 'title'
        title.style.fontSize = '24px'
        title.textContent = 'Creating HTML element DOM Day 2'

        console.log(title)
    </script>
</body>

</html>