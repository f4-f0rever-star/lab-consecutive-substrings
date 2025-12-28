function consecutiveSubstrings(string) {
  // type your code here
  //create an array to store all the substrings 
   const result = [];

  //Create a loop to go through all the substrings
  for (let i = 0; i < string.length; i++) {
    let current = "";

    for (let j = i; j < string.length; j++) {
      current += string[j];
      result.push(current);
    }
  }

  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


