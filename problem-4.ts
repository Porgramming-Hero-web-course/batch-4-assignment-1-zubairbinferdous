type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

// create a function calculate the area
function calculateShapeArea(shape: Circle | Rectangle): number {
  if (shape.shape === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.width * shape.height;
  }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(+circleArea.toFixed(2));

const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea);
