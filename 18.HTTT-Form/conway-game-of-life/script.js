const GRID_SIZE = 30;
let generation = 0;

let grid = [];

// 재생
let autoPlayInterval = null;
const AUTO_PLAY_INTERVAL = 3000;

const gridContainer = document.getElementById("grid-container");
const nextGenerationBtn = document.getElementById("next-generation");
const resetBtn = document.getElementById("reset");
const generationCount = document.getElementById("generation-count");
const autoPlayBtn = document.getElementById("auto-play");

// 초기화
function initializeGrid() {
  grid = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    grid[i] = [];
    for (let j = 0; j < GRID_SIZE; j++) {
      grid[i][j] = Math.random() > 0.7;
    }
  }
  renderGrid();
  generation = 0;
  updateGenerationCount();
}

function renderGrid() {
  gridContainer.innerHTML = "";

  for (let i = 0; i < GRID_SIZE; i++) {
    const row = document.createElement("div");
    row.className = "grid-row";

    for (let j = 0; j < GRID_SIZE; j++) {
      const cell = document.createElement("input");
      cell.type = "checkbox";
      cell.className = "cell";
      cell.checked = grid[i][j];
      cell.dataset.row = i;
      cell.dataset.col = j;

      // 체크박스 변경 시 그리드 상태 업데이트
      cell.addEventListener("change", function () {
        const row = parseInt(this.dataset.row);
        const col = parseInt(this.dataset.col);
        grid[row][col] = this.checked;
      });

      row.appendChild(cell);
    }

    gridContainer.appendChild(row);
  }
}

function countNeighbors(row, col) {
  let count = 0;

  // 8방향 이웃 확인 (상하좌우 + 대각선)
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;

    // 경계 체크
    if (
      newRow >= 0 &&
      newRow < GRID_SIZE &&
      newCol >= 0 &&
      newCol < GRID_SIZE
    ) {
      if (grid[newRow][newCol]) {
        count++;
      }
    }
  }

  return count;
}

function nextGeneration() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    grid[row][col] = cell.checked;
  });

  const newGrid = [];

  for (let i = 0; i < GRID_SIZE; i++) {
    newGrid[i] = [];
    for (let j = 0; j < GRID_SIZE; j++) {
      const neighbors = countNeighbors(i, j);
      const isAlive = grid[i][j];

      // 규칙
      if (isAlive) {
        newGrid[i][j] = neighbors === 2 || neighbors === 3;
      } else {
        newGrid[i][j] = neighbors === 3;
      }
    }
  }

  // 그리드 업데이트
  grid = newGrid;
  renderGrid();
  generation++;
  updateGenerationCount();
}

// 세대 카운트 업데이트
function updateGenerationCount() {
  generationCount.textContent = generation;
}

// 자동 재생 시작/중지
function toggleAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
    autoPlayBtn.textContent = "자동 재생 시작";
    autoPlayBtn.style.backgroundColor = "#007acc";
  } else {
    autoPlayInterval = setInterval(nextGeneration, AUTO_PLAY_INTERVAL);
    autoPlayBtn.textContent = "자동 재생 중지";
    autoPlayBtn.style.backgroundColor = "#d32f2f";
  }
}

nextGenerationBtn.addEventListener("click", nextGeneration);
resetBtn.addEventListener("click", () => {
  if (autoPlayInterval) {
    toggleAutoPlay();
  }
  initializeGrid();
  toggleAutoPlay();
});
autoPlayBtn.addEventListener("click", toggleAutoPlay);

initializeGrid();
toggleAutoPlay();
