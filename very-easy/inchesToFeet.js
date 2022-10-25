// Inches to Feet
// Create a function that accepts a measurement value in inches and returns
// the equivalent of the measurement value in feet.

function inchesToFeet(inches) {
  return inches < 12 ? 0 : inches === 12 ? 1 : inches / 12;
}
