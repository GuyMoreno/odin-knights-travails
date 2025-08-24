const isValidMove = (x, y) => {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
};

const knightMoves = (start, end) => {
  const moves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  const queue = [[start]];

  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const currentPath = queue.shift();

    const currentPosition = currentPath[currentPath.length - 1];
    const [x, y] = currentPosition;

    if (x === end[0] && y === end[1]) {
      console.log(
        `You made it in ${currentPath.length - 1} moves! Here's your path:`
      );
      currentPath.forEach((pos) => console.log(pos));
      return currentPath;
    }

    for (const [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;
      const newPosition = [newX, newY];

      const positionKey = newPosition.toString();

      if (isValidMove(newX, newY) && !visited.has(positionKey)) {
        const newPath = [...currentPath, newPosition];
        visited.add(positionKey);
        queue.push(newPath);
      }
    }
  }

  return null;
};

// Test run:
knightMoves([3, 3], [2, 5]);
