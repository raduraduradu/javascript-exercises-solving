const findTheOldest = function(people) {
  let oldest = people[0];
  let currentYear = new Date().getFullYear();
  for(let i = 1; i < people.length; i++){
    if(!("yearOfDeath" in people[i])){
      people[i].yearOfDeath = currentYear;
    }
    if(!("yearOfDeath" in oldest)){
      oldest.yearOfDeath = currentYear;
    }
    if (people[i].yearOfDeath - people[i].yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth){
      oldest = people[i]
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
