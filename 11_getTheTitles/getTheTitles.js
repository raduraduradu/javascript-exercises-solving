const getTheTitles = function(objArray) {
  let titleArray = [];
  for(let i = 0; i < objArray.length; i++){
    titleArray.push(objArray[i].title)
  }
  return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
