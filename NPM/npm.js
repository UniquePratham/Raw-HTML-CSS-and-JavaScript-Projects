console.log("NPM - Node Package Manager");
// To initiate npm
// npm init

// Checking version
// npm --version
// node --version

// To install/uninstall packages & modules
// npm install slugify
// npm install express
// npm uninstall express

// To install packages; there is short-cut
// npm i slugify

// if accidentally deleted node_modules folder then ;
// npm install
// npm i

// if you want any package of specific version then ;
// npm install slugifiy@1.6.4  latest version is - 1.6.5 at this time

// 1.6.5 means major.minor.patch
// major-major changes; minor-small functions addition; patch- small bug fixes
// Example: Someone created a package with initial
// version -1.0.0
// Now, Someone reported that a small bug is not working; please fix it
// And, the developer fixes it & brings the new latest
// version -1.0.1
// Now, Someone suggested a must-include addition of a function in the package for easier
// And, the developer thinks that yes this function is needed  & works for it & brings the new latest
// version -1.1.0
// And, if the developer changes the old working of the package by changing & removing old function; he must release
// version -2.0.0

// Sometimes, Some packages are used at the time of development only and no need when production; then we used dev dependencies. example: nodemon- it helps to automatically restart the server while any manually burden of restarting it

// --save-dev is used for dev-dependencies
// npm install nodemon --save-dev

// If  you want to install any package globally and not only for this project; then
// --global is used to use it globally after installing
//npm install nodemon --global

// "dependencies": {
//     "browserify": "^17.0.0",
//     "slugify": "^1.6.4"
//   }

// ^ - means exactly this version is to be installed ;major is not changed
// ~ - accect the patches in time-to-time; major,minor both not changed
// > - means greater than the written version

// If you want to check installed version of any packages
// npm view slugify version
// npm view browserify version