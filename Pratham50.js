// const fs= require("fs");
// let text=fs.readFileSync("Cutie.txt","utf-8");
// console.log("The content of the file Cutie.text is ");
// console.log(text);
// console.log('Replacing word "Cutie" with "Babu", we get');
// text=text.replace('Cutie','Babu');
// console.log("Creating a New File!");
// fs.writeFileSync("Babu.txt",text);
// console.log("New File Babu.txt successfully created!!! ");
// console.log("The content of the file babu.text is ");
// console.log(text);
// //Three-type of Modules in JavaScript
// // 1. Built-in Modules
// // 2. Self-made Modules
// // 3. Third-party imported from outside Modules

//1. Synchronous or Blocking - Line by Line Execution will take place & guaranteed
//2. Asynchornous or Non-Blocking - Line by Line Execution is not guaranteed ; callbacks will fire

// Calling http module
// const http=require('http');

// // Calllng fs module
// const fs=require('fs');

// // Reading file synchronously 
// const fileContent=fs.readFileSync('Pratham45.html');

// //Creating server
// // const server=http.createServer((request,response)=>{
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/html'});
//     res.end(fileContent);
// });

// server.listen(80,'127.0.0.1',()=>{
//     //Port 80 is the default port ; we can search in google directly by local host without port number if 80 (Search - 127.0.0.1)
//     console.log("Listening on port 80");
// })

//server.listen(port,'local-host',()=>{
//           console.log(); if any
// });

// server.listen(8000,'127.0.0.1',()=>{
//     //Port 8000 is the given port ; we have to  search in google for local host along with port number if any other than 80
//     // (Search - 127.0.0.1:8000)
//     console.log("Listening on port 8000");
// });