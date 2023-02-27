// Here's a basic implementation of linear search in JavaScript
function linearSearch(arr, target) {
    for (let i = 0, length = arr.length; i < length; i++) {
        if (arr[i] === target) return i; //return element found index
    }
    return -1; // element not found
}

// Using the linearSearch function is straightforward
const arr = [1,2,3,4,5];
const target = 3;
const result = linearSearch(arr,target);
console.log(result); // output: 2