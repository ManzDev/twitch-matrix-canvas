import partyParrot from "./assets/party-parrot.gif";

const image = document.createElement("img");
image.src = partyParrot;

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width = 500;
const HEIGHT = canvas.height = 500;
// const BACKGROUND_COLOR = "#112";

const gradientColor = ctx.createLinearGradient(0, 250, WIDTH, 250);
gradientColor.addColorStop(0, "red");
gradientColor.addColorStop(0.5, "yellow");
gradientColor.addColorStop(1, "transparent");

const backgroundGradient = ctx.createRadialGradient(0, 0, 50, WIDTH, HEIGHT, 150);
backgroundGradient.addColorStop(0, "blue");
backgroundGradient.addColorStop(0.5, "hotpink");
backgroundGradient.addColorStop(1, "purple");

const conicGradient = ctx.createConicGradient(90, WIDTH / 2, HEIGHT / 2);
conicGradient.addColorStop(0, "red");
conicGradient.addColorStop(0.5, "yellow");
conicGradient.addColorStop(1, "green");

ctx.fillStyle = backgroundGradient;
ctx.fillRect(0, 0, WIDTH, HEIGHT);

ctx.fillStyle = "white";
ctx.font = "37px EnterCommand";
const data = ctx.measureText("Hello World!!");
ctx.fillText("Hello World!!", WIDTH / 2, HEIGHT / 2);

ctx.beginPath();
ctx.lineCap = "square";
ctx.lineWidth = 15;
ctx.strokeStyle = "white";
ctx.shadowColor = "black";
ctx.shadowOffsetY = 8;
ctx.shadowOffsetX = -5;
ctx.shadowBlur = 5;
ctx.moveTo(20, 20);
ctx.lineTo(200, 400);
ctx.lineTo(400, 500);
ctx.lineTo(500, 300);
ctx.lineTo(400, 100);
ctx.stroke();
// ctx.clearRect(0, 0, 50, 50);

document.querySelector("button").addEventListener("click", () => {
  ctx.drawImage(image, 0, 0, 128, 128);
});
