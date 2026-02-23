function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array must have at least two elements";
    }

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let n of arr) {
        if (n > max) {
            secondMax = max;
            max = n;
        } 
        else if (n < max && n > secondMax) {
            secondMax = n;
        }
    }

    if (secondMax === -Infinity) {
        return "No second largest (all elements equal)";
    }

    return { max, secondMax };
}

// var arr = [3,2,7,9,11,45,12];
var arr = [5, 5, 5, 5]; // Test case with all elements equal
console.log(findSecondLargest(arr));