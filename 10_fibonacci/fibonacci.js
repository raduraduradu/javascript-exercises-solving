const fibonacci = function(number) {
  if(number < 0){
    return "OOPS";
  }
  if(number == 0){
    return 0;
  }
  if(number == 1 || number == 2){
    return 1;
  }
  previousTwo = [1,1];
  let thirdNum = 0;
  for(let i = 2; i < number; i++){
    thirdNum = previousTwo[0] + previousTwo[1];
    previousTwo[0] = previousTwo[1]
    previousTwo[1] = thirdNum;
  }
  return thirdNum;
};

// Do not edit below this line
module.exports = fibonacci;
