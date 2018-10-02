var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 // rl.question("Enter the string:", function(inString) {
 //
 //     rl.close();
 // });
inString1 = "./node_modules/crc-32";
inString2 = "./node_modules/xlsx";
xlsxConverter(inString1, inString2);

function xlsxConverter(jsonPath, xlsPath){
    const fs = require('fs');
     fs.readdir(jsonPath, (err, files) => {
        files.forEach(file => {
            if (file=="") {exit();}
                console.log(file);
                if (file.endsWith("json")) {
                    fs.readFile(file, (err, data) => {
                        if (err) throw err;
                console.log(data);
                });
            }
        });

    });
}
