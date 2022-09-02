let message = "This should be blue!";
console.log(message.fontcolor("green"));
console.log('\x1b[32m%s\x1b[0m', 'I am green!');  //green
console.log('\x1b[31m%s\x1b[0m', 'I am red!');  //red