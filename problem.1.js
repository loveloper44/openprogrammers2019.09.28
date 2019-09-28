function desc(a, b) {
  return b - a;
}

function solution(goods, boxes) {
  goods.sort(desc);
  boxes.sort(desc);

  let cur = 0;
  goods.forEach(good => {
    if (good <= boxes[cur]) {
      cur++;
    }
  });

  return cur;
}
