const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width = innerWidth;
const HEIGHT = canvas.height = innerHeight;
const TEXT_HEIGHT = 20;
let font = "monospace";

const moveCanvas = () => {
  document.body.classList.add("moved");
  document.body.classList.add("color");
  setTimeout(() => {
    document.body.classList.remove("moved");
  }, 300);
  setTimeout(() => {
    document.body.classList.remove("color");
  }, 600);
  document.querySelector(".manz div").classList.add("comic");
};

const generateCharacter = () => {
  // const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const CHARACTERS = Array.from(Array(94)).map((char, index) => String.fromCharCode(33 + index));
  const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
  return CHARACTERS[randomIndex];
};

// Init
const totalColumns = Math.floor(WIDTH / TEXT_HEIGHT) + 1;
const columns = [];
for (let i = 0; i < totalColumns; i++) {
  const size = Math.floor(Math.random() * 12) + 15;
  const letters = Array.from(Array(size)).map(char => generateCharacter());
  const initialY = -1000 + (-1 * Math.floor(Math.random() * 500));
  const fastRandomSpeed = ~~(Math.random() * 20);
  const speed = fastRandomSpeed === 0 ? 40 : 10 + Math.random() * 20;
  columns.push({
    y: initialY,
    letters,
    speed
  });
}

// Reset
ctx.fillStyle = "black";
ctx.fillRect(0, 0, WIDTH, HEIGHT);

const getColor = (index, array) => {
  const size = array.length;
  const COLORS = [
    "#0f01",
    "#0f02",
    "#0f05",
    "#0f0f",
    "#fff",
  ];
  const last = index === size - 1;
  const first = index === 0;
  const second = index === 1;
  const third = index === 2;

  return last
    ? COLORS[4]
    : first
      ? COLORS[0]
      : second
        ? COLORS[1]
        : third
          ? COLORS[2]
          : COLORS[3];
};

const matrix = () => {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.font = `18pt ${font}`;

  columns.forEach((data, x) => {
    data.letters.forEach((letter, index, array) => {
      const isWhite = index === array.length - 1;
      ctx.fillStyle = getColor(index, array);
      ctx.shadowColor = "#2aa144";
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 10;
      isWhite && (letter = generateCharacter());
      const random = Math.floor(Math.random() * 25);
      random === 0 && (letter = generateCharacter());
      ctx.fillText(letter, x * TEXT_HEIGHT, 50 + data.y + index * TEXT_HEIGHT);
    });
    data.y += data.speed;
    if (data.y > HEIGHT) {
      data.y = -500;
      data.letters = Array.from(Array(data.letters.length)).map(char => generateCharacter());
    }
  });
};

setInterval(matrix, 50);
setInterval(() => {
  moveCanvas();
  font = "Comic Sans MS";
}, 8000);
