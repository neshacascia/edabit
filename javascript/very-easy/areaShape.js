// Triangle and Parallelogram Area Finder
// Write a function that accepts base (decimal), height (decimal) and shape ("triangle",
// "parallelogram") as input and calculates the area of that shape.

// Area of a triangle is 0.5 * b * h
// Area of a parallelogram is b * h

function areaShape(base, height, shape) {
  if (shape === 'triangle') {
    return 0.5 * base * height;
  } else {
    return base * height;
  }
}
