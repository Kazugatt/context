function romanToInt(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prev = 0;

  // Loop through each character of the input string
  for (let i = s.length - 1; i >= 0; i--) {
    // Get the corresponding integer value of the current Roman numeral character
    let curr = map[s[i]];

    // If the current value is greater than or equal to the previous value, add it to the result
    if (curr >= prev) {
      result += curr;
    } else {
      // If the current value is less than the previous value, subtract it from the result
      result -= curr;
    }

    // Update the previous value for the next iteration
    prev = curr;
  }

  return result;
}
const roman = "MCM XC IV";
const integer = romanToInt(roman);
console.log(integer); // 1994