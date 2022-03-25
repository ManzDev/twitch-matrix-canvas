const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width = innerWidth;
const HEIGHT = canvas.height = innerHeight;
const TEXT_HEIGHT = 20;

// Reset
ctx.fillStyle = "black";
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Init
const totalColumns = Math.floor(WIDTH / TEXT_HEIGHT) + 1;
const columns = [];
for (let i = 0; i < totalColumns; i++) {
  columns.push({
    y: 0,
    oldY: 0,
    char: "",
    oldChar: ""
  });
}

const generateCharacter = () => {
  const characterIndex = Math.random() * 128;
  return String.fromCharCode(characterIndex);
};

const matrix = () => {
  ctx.fillStyle = "#0001";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.font = "18pt EnterCommand";

  columns.forEach((data, index) => {
    const y = data.y;
    const text = generateCharacter();
    const x = index * TEXT_HEIGHT;

    ctx.fillStyle = "#0f0";
    ctx.fillText(text, x, y);

    const maxHeight = 100 + Math.random() * 10000;
    // columns[index].oldChar = columns[index].char;
    // columns[index].oldY = columns[index].y;
    if (y > maxHeight) {
      columns[index].y = 0;
      columns[index].char = text;
    } else {
      columns[index].y = y + TEXT_HEIGHT;
      columns[index].char = text;
    }

    /*
    ctx.fillStyle = "#00f";
    ctx.fillText(text, x, y);

    ctx.fillStyle = "#0f0";
    ctx.fillText(text, x, columns[index].oldY);
    */
  });
};

setInterval(matrix, 50);
