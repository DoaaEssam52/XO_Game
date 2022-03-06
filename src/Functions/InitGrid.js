export default function InitGrid(size) {
  let grid = [];
  for (let i = 1; i <= size * size; i++) {
    grid.push({
      id: i,
      value: "",
    });
  }
  return grid;
};
