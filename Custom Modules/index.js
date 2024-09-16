const cube = require("./mod2");
// const average = require("./mod");
const mod = require("./mod");
console.log(mod);
console.log(cube);
// console.log(mod.name);
// console.log(average([3, 8, 12]));
console.log(mod.avg([3, 8, 12]));
console.log(mod.sqre(4));
console.log(cube(3));
console.log("This is index.js");

//1. We have import mod.js but function is not imported because module.exports was not written
//2. When we imported average function by module.exports then we have to write function name to import it
//3. When we imported mod2.js and cube function then again we have to write function name to import it because of single module.exports
//4. To export more than one function from mod.js we have to make module.exports; an object using short-hand name of function like avg & sqre
//5. Now we have imported 2 function from mod.js as an object and imported  it using mod=require("./mod") & used it as mod.avg & mod.sqre and 1 function from mod2.js direct as an single function  and imported it using cube=require("./mod2.js") & used it as cube function ; both by its name 
// The main thing to note is that if a single function is exported by module.exports then; we have to import it using the function name
// & if two or more than that is exported by module.exports then first make module.exports an object & then give the function a short-hand name and import it as filename.js and use it as filename.short-handfunctionname   