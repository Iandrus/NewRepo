var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 rl.question("Enter the string:", function(inString) {
     Palindrome(inString);
     rl.close();
 });

function Palindrome(str){
    //console.log("str=",str);
    let size=str.length;
    let reverseStr=str.toLowerCase().split('').reverse().join("");
    if (reverseStr.toLowerCase()===str.toLowerCase())
    {console.log("str==Revercestr",str);}
    else {
    console.log(size);
    console.log(str);
    console.log(reverseStr);}
}
