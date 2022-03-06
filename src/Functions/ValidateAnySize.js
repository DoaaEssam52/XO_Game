export default function ValidateAnySize(gridData) {
  let size=Math.sqrt(gridData.length);
  //Horizontal
  for (let i = 0; i < gridData.length; i += size) {
    let indexes1 = [gridData[i].id];
    let prevValue = gridData[i].value;
    for (let j = i; j < size + i; j++) {
      if (prevValue == gridData[j + 1].value && prevValue != "") {
        indexes1.push(gridData[j + 1].id);
        prevValue = gridData[j + 1].value;
      } else {
        break;
      }
      if (indexes1.length == size) return indexes1;
    }
  }
  //Vertical
  for (let i = 0; i < size; i++) {
    let indexes2 = [gridData[i].id];
    let prevValue = gridData[i].value;
    for (let j = i + size; j < gridData.length; j += size) {
      if (prevValue == gridData[j].value && prevValue != "") {
        indexes2.push(gridData[j].id);
        prevValue = gridData[j].value;
      } else {
        break;
      }
      if (indexes2.length == size) return indexes2;
    }
  }
  //Left diagonal
  let indexes3 = [gridData[0].id];
  let prevValue = gridData[0].value;
  for (let j = 1; j < size; j++) {
    if (prevValue == gridData[j * (size + 1)].value && prevValue != "") {
      indexes3.push(gridData[j * (size + 1)].id);
      prevValue = gridData[j * (size + 1)].value;
    } else {
      break;
    }
    if (indexes3.length == size) return indexes3;
  }
  //Right diagonal

  let indexes4 = [gridData[size - 1].id];
  prevValue = gridData[size - 1].value;
  for (let j = 2 * size - 2; j < gridData.length; j += size - 1) {
    if (prevValue == gridData[j].value && prevValue != "") {
      indexes4.push(gridData[j].id);
      prevValue = gridData[j].value;
    } else {
      break;
    }
    if (indexes4.length == size) return indexes4;
  }
}
