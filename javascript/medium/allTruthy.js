// Check if All Values Are True:
// Create a function that returns true if all parameters are truthy, and false otherwise.

function allTruthy(...args) {
  return [...args].every(elem => (elem ? true : false));
}
