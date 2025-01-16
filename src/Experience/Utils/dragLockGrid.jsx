export const dragLockGrid = (
  localMatrix,
  gridSize,
  cellSize,
  whichSurface,
  sizes
) => {
  const clampedX = Math.max(
    -gridSize / 2 + sizes[0],
    Math.min(gridSize / 2 - sizes[0], localMatrix.elements[12])
  );
  const clampedY = Math.max(
    -gridSize / 2 + sizes[1],
    Math.min(gridSize / 2 - sizes[1], localMatrix.elements[13])
  );
  const clampedZ = Math.max(
    -gridSize / 2 + sizes[2],
    Math.min(gridSize / 2 - sizes[2], localMatrix.elements[14])
  );

  localMatrix.elements[12] =
    whichSurface === "rightWall"
      ? localMatrix.elements[12]
      : whichSurface === "leftWall"
      ? Math.round(clampedX / cellSize) * cellSize + 0.25
      : whichSurface === "floor"
      ? Math.round(clampedX / cellSize) * cellSize - 0.1 + 0.25
      : undefined;

  localMatrix.elements[13] =
    whichSurface === "floor"
      ? localMatrix.elements[13]
      : Math.round(clampedY / cellSize) * cellSize - 0.25;

  localMatrix.elements[14] =
    whichSurface === "leftWall"
      ? localMatrix.elements[14]
      : Math.round(clampedZ / cellSize) * cellSize + 0.1 - 0.25;
};
