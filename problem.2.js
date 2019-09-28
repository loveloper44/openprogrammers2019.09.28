const dx = [1, 1, -1, -1];
const dy = [-1, 1, 1, -1];

function mark(map, x, y) {
  map[y][x] = false;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 4; j++) {
      const nx = x + i * dx[j];
      const ny = y + i * dy[j];
      if (nx < 0 || nx >= 8 || ny < 0 || ny >= 8) {
        continue;
      }
      map[ny][nx] = false;
    }
  }
}

function solution(bishops) {
  let map = new Array(8).fill(0).map(item => new Array(8).fill(true));

  bishops.map(bishop => {
    const x = bishop[0].charCodeAt(0) - "A".charCodeAt(0);
    const y = parseInt(bishop[1])-1;
    mark(map, x, y);
  });

  let answer = 0;
  map.forEach(row => {
    row.forEach(item => {
      if (item) {
        answer++;
      }
    });
  });
  return answer;
}
