export const dragLockGrid = (
  localMatrix,
  gridSize,
  cellSize,
  whichSurface,
  sizes
) => {
  const clampedX = Math.max(
    -gridSize / 2 + Math.ceil(sizes[0] / 2),
    Math.min(gridSize / 2 - Math.ceil(sizes[0] / 2), localMatrix.elements[12])
  );
  const clampedY = Math.max(
    -gridSize / 2 + Math.ceil(sizes[2] / 2),
    Math.min(gridSize / 2 - Math.ceil(sizes[2] / 2), localMatrix.elements[13])
  );
  const clampedZ = Math.max(
    -gridSize / 2 + Math.ceil(sizes[1] / 2),
    Math.min(gridSize / 2 - Math.ceil(sizes[1] / 2), localMatrix.elements[14])
  );

  localMatrix.elements[12] =
    whichSurface === "rightWall"
      ? 0
      : Math.round(clampedX / cellSize) * cellSize;

  localMatrix.elements[13] =
    whichSurface === "floor" ? 0 : Math.round(clampedY / cellSize) * cellSize;

  localMatrix.elements[14] =
    whichSurface === "leftWall"
      ? 0
      : Math.round(clampedZ / cellSize) * cellSize;
};
