const ret = new Array(5).fill(-1);

function find(sticker, index) {
  if (index >= sticker.length) {
    return 0;
  }

  if (ret[index] !== -1) {
    return ret[index];
  }

  const notSelected = find(sticker, index + 1);
  const selected = sticker[index] + find(sticker, index + 2);

  ret[index] = notSelected > selected ? notSelected : selected;

  return ret[index];
}

function solution(sticker) {
  return find(sticker, 0, 0);
}
