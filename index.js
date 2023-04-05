function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // If the sum of the pair equals the target, return true
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  // If no pair adds up to the target, return false
  return false;
  }
 

/* 
  Write the Big O time complexity of your function here
  The time complexity of the hasTargetSum function is O(n^2), where n is the length of the input array. 
  This is because the function uses nested loops to iterate through all pairs of numbers in the array, 
  which results in a quadratic time complexity. Specifically, the outer loop runs n times, and the inner loop runs (n-1), (n-2), ..., 2, and 1 times 
  for each iteration of the outer loop. Therefore, the total number of iterations is 1 + 2 + ... + (n-1), 
  which is equal to (n^2 - n) / 2. Since the (n^2) term dominates as n gets larger, the time complexity is O(n^2).
*/

/* 
  Add your pseudocode here
  function hasTargetSum(arr, target):
    for i from 0 to arr.length - 1:
        for j from i + 1 to arr.length - 1:
            if arr[i] + arr[j] == target:
                return true
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
