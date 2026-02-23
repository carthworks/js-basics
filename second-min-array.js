var min = Infinity;
var sec = Infinity;

var arr = [3,2,7,9,11,45,12];

for (let n of arr) {
    if (n < min) {
        sec = min;
        min = n;
    } else if (n < sec && n !== min) {
        sec = n;
    }
}

console.log("Min:", min);
console.log("Second Min:", sec);