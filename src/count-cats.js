module.exports = function countCats(matrix) {
  // remove line with error and write your code here
  let total = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] === "^^" ? total += 1 : total += 0;
    }
  }
  return total;
};
