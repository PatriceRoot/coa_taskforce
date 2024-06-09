function arrayMap(array, target) {
// Initialize variables to track current sum and starting index.
  let number = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {

    sum += array[i]; // Add the current element to the sum

// If the sum exceeds the target, adjust the starting index of the subarray
    while (sum > target && number <= i) {
        sum -= array[number]; // Subtract the element at the start index
        number++; // Move the start index forward
    }

    // Check if the current sum matches the target
    if (sum === target) {
        return true; // Found a subarray with the target sum
    }
  }
  
  return false; // No subarray with the target sum was found
}

// Here we have an example of how our code might be used
const array = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(arrayMap(array, target)) //expected result : true
