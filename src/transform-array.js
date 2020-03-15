module.exports = function transform(arr) {
  // remove line with error and write your code here
  if (arr.length === 0) {
    return [];
  }

  if (!(Array.isArray(arr))) {
    throw new Error();
  }

  return arr.forEach(function (a) {
    switch (a) {
      case "--discard-next":
        if (a + 1) { 
          arr.splice(arr.indexOf(a), 2); 
          break; 
        }
      case "--discard-prev":
        if (a - 1) {
          arr.splice(arr.indexOf(a - 1), 2);
          break;
        }
      case "--double-next":
        if (a + 1) { 
          arr.splice(arr.indexOf(a + 1), 1, (a + 1) * (a + 1)).splice(arr.indexOf(a), 1);
           break; 
        }
      case "--double-prev":
        if (a - 1) { 
          arr.splice(arr.indexOf(a - 1), 1, (a - 1) * (a - 1)).splice(arr.indexOf(a), 1);
           break; 
        }
    }
  });

};

