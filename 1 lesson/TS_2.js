Function1("Elon Musk's Moon mission and the depressing of space. Space is hard and Musk the Hare and Nasa the Tortoise.", 2, "aaa");

function Function1(str1, number, str2) {
    //console.log("str=",str);
    var splittedStr = str1.toLowerCase().split(' ');
    var i, result="";
    for (i = 0; i < splittedStr.length; i++) {
            console.log(splittedStr[i].length, splittedStr[i]);
            result+=" aaa"+splittedStr[i].slice(number);
    }
    console.log(result);
}
