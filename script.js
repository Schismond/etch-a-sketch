//colors
let grayScale = document.getElementById('grey-shades');
let colorBtn = document.getElementById('selectColor')
let colorRange = document.getElementById('color-range');
let RGB = document.getElementById('rainbow');
let eraser = document.getElementById('eraser');
let reset = document.getElementById('reset');
let randomise = document.getElementById('randomise');
//grid
let gridSize = document.getElementById('grid-size');
let gridSizeParagraph = document.getElementById('grid');
let drawingArea = document.getElementById('playground');
//functions
function creatDivs(col) {
    for(let i = 0; i < (col * col) ; i++) {
        const div = document.createElement('div');
        drawingArea.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        drawingArea.style.gridTemplateRows = `repeat(${col}, 1fr)`;
        drawingArea.appendChild(div).classList.add('box');
    }
}
creatDivs(16);

function resetGrid(){
    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].remove();
    }
    drawingArea.style.gridTemplateColumns = '';
    drawingArea.style.gridTemplateRows = '';
   }

function setNewGridSize(){
    var val = document.getElementById("grid-size").value;
    gridSizeParagraph.innerText = (val + 'X' + val);
    resetGrid();
    creatDivs(val);
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
        });
    });
};

function setNewColor(){
    let val = document.getElementById("color-range").value;
    return val;
};

gridSize.addEventListener('change',setNewGridSize);

colorRange.addEventListener('change',()=>{
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {box.addEventListener('mouseover', () => {
        box.style.backgroundColor = colorRange.value;
        });
    });
})

window.onload = () => {
    colorBtn.className += "active";
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black' ;
        });
    });
}

function gayColors(){
    let boxes = document.querySelectorAll('.box');
    let lastActiveBox = document.querySelector('.active');
    lastActiveBox.classList.remove('active');
    RGB.className += "active";
    boxes.forEach(box => {box.addEventListener('mouseover', () => {
        let RGBValue = [];
        for(let i=0;i<3;i++){
            RGBValue[i] = Math.floor(Math.random() * 257);
        }
        box.style.backgroundColor = 'rgb('+RGBValue.toString()+')';
    });
})};
RGB.addEventListener('click',gayColors);
eraser.addEventListener('click',erase);
function erase(){
    let boxes = document.querySelectorAll('.box');
    let lastActiveBox = document.querySelector('.active');
    lastActiveBox.classList.remove('active');
    eraser.className += "active";
    boxes.forEach(box => {box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "white";
        });
    });
}

colorBtn.addEventListener('click',function(){
    let boxes = document.querySelectorAll('.box');
    let lastActiveBox = document.querySelector('.active');
    lastActiveBox.classList.remove('active');
    colorBtn.className += "active";
    boxes.forEach(box => {box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "black";
        });
    });
});

reset.addEventListener('click',function(){
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {boxes
        box.style.backgroundColor = "white";
    });
});

randomise.addEventListener('click',function(){
    let boxes = document.querySelectorAll('.box');
    // let lastActiveBox = document.querySelector('.active');
    // lastActiveBox.classList.remove('active');
    // RGB.className += " active";
    boxes.forEach(box => {boxes
        let RGBValue = [];
        for(let i=0;i<3;i++){
            RGBValue[i] = Math.floor(Math.random() * 257);
        }
        box.style.backgroundColor = 'rgb('+RGBValue.toString()+')';    
    });
});

grayScale.addEventListener('click',function(){
    let boxes = document.querySelectorAll('.box');
    let lastActiveBox = document.querySelector('.active');
    lastActiveBox.classList.remove('active');
    grayScale.className += "active";
    let T=[];
    for(let j=0;j<boxes.length;j++){
        T[j]=0;
    }
    for(let i=0;i<boxes.length;i++){
        boxes[i].addEventListener('mouseover', () => {
            T[i]=T[i]+0.1;
            boxes[i].style.backgroundColor = 'rgba(0, 0, 0, '+ T[i] +')';
    }
    );}
});