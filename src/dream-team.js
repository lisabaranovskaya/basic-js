module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  if (!(Array.isArray(members))) {
    return false;
  }
  else {
    return members.filter(a => typeof a === 'string').map(x => x.trim()[0].toUpperCase()).sort().join('');
  }
};