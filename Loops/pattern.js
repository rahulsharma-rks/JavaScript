/*

0   #
1   ##
2   ###
3   ####
4   #####
5   ######
6   #######

*/

let h = 7
for (h = 0; h <= 7; h++){
    let line = '';
    for(let l = 1; l <=h; l++){
        line += '#'
    }
    console.log(line)
}