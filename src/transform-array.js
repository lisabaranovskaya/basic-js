module.exports = function transform(arr) {
  // remove line with error and write your code here
  if (arr.length === 0) {
    return [];
  }

  if (!(Array.isArray(arr))) {
    throw new Error();
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-prev":
        if (result.length !== 0) {
          result.pop();
        }
        break;

      case "--double-prev":
        if (i !== 0) {
          result.push(arr[i-1]);
        }
        break;
      case "--double-next":
        if (i < arr.length - 1) {
          result.push(arr[i+1]);
        }
        break;

      case "--discard-next":
        i++;
        break;

      default:
        result.push(arr[i]);
        
    }
  }
  
  return result;

};

