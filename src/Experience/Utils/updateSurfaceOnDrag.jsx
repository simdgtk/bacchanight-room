export const updateSurfaceOnDrag = (e, handleSetWhichSurface) => {
  if (
    e.object.parent.name.includes("floor") ||
    e.object.name.includes("floor") ||
    e.object.parent.parent.name.includes("floor")
  ) {
    handleSetWhichSurface("floor");
  } else if (
    e.object.parent.name.includes("leftWall") ||
    e.object.name.includes("leftWall") ||
    e.object.parent.parent.name.includes("floor")
  ) {
    handleSetWhichSurface("leftWall");
  } else if (
    e.object.parent.name.includes("rightWall") ||
    e.object.name.includes("rightWall") ||
    e.object.parent.parent.name.includes("floor")
  ) {
    handleSetWhichSurface("rightWall");
  }
};
