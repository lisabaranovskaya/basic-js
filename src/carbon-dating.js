const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  // remove line with error and write your code here
  if (arguments.length === 0 || typeof sampleActivity !== 'string' || sampleActivity.match(/[A-Za-z]/) !== null || sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0) {
    return false;
  }

  let rate_constant = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
  let age = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / rate_constant;
  return Math.ceil(age);
};
