//Given an array of numbers
//Given a number
//This program uses the binary search algorithm to check if the number is in the array

function binarySearchOccurance(array, number) {
  //Type your solutions here
  let low = 0; high = array.length - 1; result = -1, counter = 0, occurence = 0;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if(array[mid] === number || array[low] === number || array[high] === number) {

      if(array[mid] === number) {
        result = mid;
        occurence += 1;
        if (array[mid+1] === number) {
          while (array[mid+1] === number) {
            result = mid+1;
            mid++;
          }
        } else if (array[mid-1]===number) {
          
        }
        
      }
    } else if (number < array[mid]) high = mid - 1;
    else low = mid + 1; 
  }
  return result;
}

module.exports = binarySearchOccurance;