const wrapperDemo = require("./wrapper-module");

console.log(`__filename in wrapper demo: ${__filename}`);

console.log(`__dirname in wrapper demo: ${__dirname}`);

console.log(wrapperDemo.greet("Anirudha"));
