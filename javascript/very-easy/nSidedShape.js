// Shapes With N Sides:
// Create a function that takes a whole number as input and returns the shape with that number's amount of sides.
// Here are the expected outputs to get from these inputs.

function nSidedShape(n) {
  const shapes = [
    'circle',
    'semi-circle',
    'triangle',
    'square',
    'pentagon',
    'hexagon',
    'heptagon',
    'octagon',
    'nonagon',
    'decagon',
  ];
  return shapes[n - 1];
}
