const removeFromArray = function(array, ...args) {
  for (let arg of args) {
    for(let i = 0; i < array.length; i++) {
      if(arg == array[i]) {
        array.splice(i, 1);
        i--;
      }
    }
  }
  return array;
};


arr=[1, 2, 2, 3, 4];

array1 = removeFromArray(arr, 2);

console.log(array1);

