import { Howl } from "howler";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const columns = [];

const WIDTH = canvas.width = innerWidth;
const HEIGHT = canvas.height = innerHeight;
const TEXT_HEIGHT = 20;
const LAYERS = 2;

const music = new Howl({
  src: ["loop-music-connection.mp3"],
  loop: true
});

const glitch = new Howl({
  src: ["glitch.mp3"],
  loop: false
});

let font = "monospace";

const toggleFont = () => {
  font = font === "monospace" ? "Comic Sans MS" : "monospace";
  document.querySelector(".manz div").classList.toggle("comic");
};

const moveCanvas = () => {
  document.body.classList.add("moved");
  document.body.classList.add("color");
  setTimeout(() => document.body.classList.remove("moved"), 300);
  setTimeout(() => document.body.classList.remove("color"), 600);
};

const generateCharacter = () => {
  const CHARACTERS = Array.from(Array(94)).map((char, index) => String.fromCharCode(33 + index));
  const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
  return CHARACTERS[randomIndex];
};

const init = () => {
  const totalColumns = Math.floor(WIDTH / TEXT_HEIGHT) + 1;
  for (let i = 0; i < totalColumns * LAYERS; i++) {
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
  music.play();

  // Reset
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
};

const getColor = (index, array, x) => {
  const size = array.length;
  const COLORS = [
    "#0f01",
    "#0f02",
    "#0f05",
    "#0f0f",
    "#ffff",
  ];
  const last = index === size - 1;
  const first = index === 0;
  const second = index === 1;
  const third = index === 2;

  const color = last
    ? COLORS[4]
    : first
      ? COLORS[0]
      : second
        ? COLORS[1]
        : third
          ? COLORS[2]
          : COLORS[3];

  const alpha = x % 4
    ? "f"
    : x % 3 ? "6" : "2";

  return color.split("").slice(0, -1).join("") + alpha;
};

const matrixIteration = () => {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.font = `18pt ${font}`;

  columns.forEach((data, x) => {
    data.letters.forEach((letter, index, array) => {
      const isWhite = index === array.length - 1;
      ctx.fillStyle = getColor(index, array, x);
      ctx.shadowColor = "#2aa144";
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 10;
      isWhite && (letter = generateCharacter());
      const random = Math.floor(Math.random() * 25);
      random === 0 && (letter = generateCharacter());
      ctx.fillText(letter, x * (TEXT_HEIGHT / LAYERS), 50 + data.y + index * TEXT_HEIGHT);
    });

    data.y += data.speed;
    if (data.y > HEIGHT) {
      data.y = -500;
      data.letters = Array.from(Array(data.letters.length)).map(char => generateCharacter());
    }
  });
};

init();
setInterval(matrixIteration, 50);
setInterval(() => {
  moveCanvas();
  music.volume(0);
  setTimeout(() => (music.volume(1)), 500);
  glitch.play();
  toggleFont();
}, 12000);
