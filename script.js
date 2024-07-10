function descendingOrder(n) {
    // Convert the number to a string and then split it into an array of digits
    let digits = n.toString().split('');
    
    // Use bubble sort to sort the digits in descending order
    for (let i = 0; i < digits.length; i++) {
      for (let j = 0; j < digits.length - 1 - i; j++) {
        if (digits[j] < digits[j + 1]) {
          // Swap the digits
          let temp = digits[j];
          digits[j] = digits[j + 1];
          digits[j + 1] = temp;
        }
      }
    }
    
    // Join the sorted digits back into a single string
    let sortedNumberString = digits.join('');
    
    // Convert the string back to a number
    let sortedNumber = parseInt(sortedNumberString, 10);
    
    return sortedNumber;
  }
  
  // Example usage:
  console.log(descendingOrder(42145)); // Output: 54421
  console.log(descendingOrder(145263)); // Output: 654321
  console.log(descendingOrder(123456789)); // Output: 987654321
  