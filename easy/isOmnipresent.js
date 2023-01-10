// Omnipresent Value:
// A value is omnipresent if it exists in every subarray inside the main array.
// Create a function that determines whether an input value is omnipresent for a given array.

function isOmnipresent(arr, val) {
  return arr.every(item => item.includes(val));
}
