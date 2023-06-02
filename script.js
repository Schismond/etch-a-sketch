const grayScaleButton = document.getElementById("gray-scale");
const colorButton = document.getElementById("select-color");
const colorRangeInput = document.getElementById("color-range");
const rgbButton = document.getElementById("rainbow");
const eraserButton = document.getElementById("eraser");
const resetButton = document.getElementById("reset-grid");
const randomizeButton = document.getElementById("randomize");
const gridSizeInput = document.getElementById("grid-size");
const gridSizeParagraph = document.getElementById("grid-size-text");
const drawingArea = document.getElementById("playground");

// Grid
function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    drawingArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    drawingArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    drawingArea.appendChild(box).classList.add("box");
  }
}

function resetGrid() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.remove();
  });
  drawingArea.style.gridTemplateColumns = "";
  drawingArea.style.gridTemplateRows = "";
}

function setNewGridSize() {
  const size = gridSizeInput.value;
  gridSizeParagraph.innerText = `${size} X ${size}`;
  resetGrid();
  createGrid(size);
  const boxes = document.querySelectorAll(".box");
  const lastActiveButton = document.querySelector(".active");
  lastActiveButton.classList.remove("active");
  colorButton.classList.add("active");
  let a = setNewColor();
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = a;
    });
  });
}

// default behaviour
window.onload = () => {
  colorButton.classList.add("active");
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "black";
    });
  });
};

// Color Functions
function setColor(color) {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = color;
    });
  });
}

function setNewColor() {
  const color = colorRangeInput.value;
  return color;
}

// Event Listeners
gridSizeInput.addEventListener("change", setNewGridSize);

colorButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    const lastActiveButton = document.querySelector(".active");
    lastActiveButton.classList.remove("active");
    colorButton.classList.add("active");
    let a = setNewColor();
    boxes.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = a;
      });
    });
});

colorRangeInput.addEventListener("change", () => {
  const color = setNewColor();
  setColor(color);
});

grayScaleButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    const lastActiveButton = document.querySelector(".active");
    lastActiveButton.classList.remove("active");
    grayScaleButton.classList.add("active");
    const opacityValues = new Array(boxes.length).fill(0);
    boxes.forEach((box, index) => {
      box.addEventListener("mouseover", () => {
        opacityValues[index] += 0.1;
        box.style.backgroundColor = `rgba(0, 0, 0, ${opacityValues[index]})`;
      });
    });
  });

rgbButton.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  const lastActiveButton = document.querySelector(".active");
  lastActiveButton.classList.remove("active");
  rgbButton.classList.add("active");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      // Generate three different colors directly and assign them as CSS values
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      box.style.backgroundColor = randomColor;
    });
  });
});

eraserButton.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  const lastActiveButton = document.querySelector(".active");
  lastActiveButton.classList.remove("active");
  eraserButton.classList.add("active");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "white";
    });
  });
});

resetButton.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
  });
});

randomizeButton.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    box.style.backgroundColor = randomColor;
  });
});

// Initial Grid Creation
createGrid(16);