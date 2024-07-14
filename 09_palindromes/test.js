const palindromes = function (string) {
  word = string.toLowerCase().replace(/[' '.,\/#!$%\^&\*;:{}=\-_~()]/g, '');
  console.log(word);
  reversedWord = "";
  for(let i = word.length - 1; i >= 0; i--){
    reversedWord += word[i];
  }
  if (reversedWord === word){
    return true;
  }
  else {
    return false;
  }
};



console.log(palindromes("racecar!"));
