console.log("This is module");
function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}
function square(num) {
    let sqr = num * num;
    return sqr;
}
// module.exports = average;
// module.exports.name = "Pratham";
module.exports = {
    avg: average,
    sqre: square,
};
