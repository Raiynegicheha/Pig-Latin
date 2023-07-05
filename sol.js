function translatePigLatin(str) {
  var Regex = /^[^aeiou]+/;
// ^ outside the character set is used to search for patterns at the beginning of strings 
  var consonants = str.match(Regex);
// match return a new array of elements the meet the criteria
  // the condiotional| ternary operation a?b:c is a one line if-else statement.
  // a is the condition b is the code to run when the syntax is true and c is the code to run when the condition returns false
  return consonants !== null 
  ? str
      .replace(consonants, "")
      .concat(consonants + "ay")
  : str.concat("way")
  
  console.log(consonants);
  
}

translatePigLatin("consonant");
