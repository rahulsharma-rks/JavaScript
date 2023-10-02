/*
call back Let us see a callback function which can take two parameters. The first parameter is err and the second is 
result. If the err parameter is false, there will not be error other wise it will return an error.
*/


const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML5', 'TailWind', 'JS','ReactJS']
      callback('It did not go well as per my hardwork', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback)