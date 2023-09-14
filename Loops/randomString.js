const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
charLength = 10;
result = ' '

for(let i = 0; i < charLength; i ++){
    result += characters.charAt(Math.floor(Math.random() * charLength));
}
console.log(result)