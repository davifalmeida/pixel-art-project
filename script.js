// Criação da paleta de cores
function generateRandomicColors() {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
  
    return `rgb(${r}, ${g}, ${b})`;
  }
  function selectColor(event) {
      const selectedColor = document.querySelector('.selected');
      selectedColor.classList.remove('selected');
      selectedColor.style.boxShadow = null;
      event.target.classList.add('selected');
      event.target.style.boxShadow = '0 0 10px 5px red';
  }
  function createPalette() {
      const numberOfColors = 4;
      const colorPalette = document.querySelector('#color-palette');
  
      for (let index = 0; index < numberOfColors; index += 1) {
      const newColor = document.createElement('li');
      newColor.className = 'color';
      colorPalette.appendChild(newColor);
      if (index === 0) {
          newColor.style.backgroundColor = 'black';
          newColor.classList.add('selected');
          newColor.style.boxShadow = '0 0 10px 5px red';
      } else {
          newColor.style.backgroundColor = generateRandomicColors();
      }
      newColor.addEventListener('click', selectColor);
  }
  }
  
  createPalette();
  
  function selectPixelColor() {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    this.style.backgroundColor = selectedColor;
  }
  //Criação do quadro de desenho
  let pixelBoard;
  
  function drawingBordContainer() {
      const boardContainer = document.querySelector('#board-container');
      pixelBoard = document.createElement('div');
      pixelBoard.id = 'pixel-board';
      boardContainer.appendChild(pixelBoard);
  }
  
  drawingBordContainer();
  
  let numberOfRows = 5;
  let numberOfColumns = 5;
  
  function createDrawingBord() {
    for (let rows = 0; rows < numberOfRows; rows += 1) {
      const newRow = document.createElement('div');
      newRow.className = 'tr';
      pixelBoard.appendChild(newRow);
      for (let columns = 0; columns < numberOfColumns; columns += 1) {
        const newPixel = document.createElement('div');
        newPixel.className = 'pixel td';
        newPixel.style.backgroundColor = 'white';
        newRow.appendChild(newPixel);
        newPixel.addEventListener('click', selectPixelColor);
      }
    }
  }
  
  createDrawingBord();
  
  // criação dos butoes
  const paletteContainer = document.querySelector('#palette-container');
  const btnClean = document.createElement('button');
  btnClean.innerText = 'Limpar';
  btnClean.id = 'clear-board';
  paletteContainer.appendChild(btnClean);
  
  btnClean.addEventListener('click', () => {
      const pixels = document.querySelectorAll('.pixel');
      for (let index = 0; index < pixels.length; index += 1) {
          pixels[index].style.backgroundColor = 'white';
      }
  });
  
  const inputDrawingBordSize = document.createElement('input');
  inputDrawingBordSize.type = 'number';
  inputDrawingBordSize.id = 'board-size';
  inputDrawingBordSize.min = '1';
  inputDrawingBordSize.placeholder = 'Insira um número de 5 a 50';
  paletteContainer.appendChild(inputDrawingBordSize);
  
  const btnGenerateBoard = document.createElement('button');
  btnGenerateBoard.id = 'generate-board';
  btnGenerateBoard.innerText = 'VQV';
  paletteContainer.appendChild(btnGenerateBoard);
  
  function removeBoard() {
    const getBoard = document.querySelector('#pixel-board');
    getBoard.remove();
  }
  
  btnGenerateBoard.addEventListener('click', () => {
    const inputValue = inputDrawingBordSize.value;
    let inputNumber = parseInt(inputValue, 10);
    if (inputValue === '') {
      window.alert('Board inválido!');
    } else if (inputNumber < 5) {
      inputNumber = 5;
    } else if (inputNumber > 50) {
      inputNumber = 50;
    }
    removeBoard();
    drawingBordContainer();
    numberOfRows = inputNumber;
    numberOfColumns = inputNumber;
    createDrawingBord();
    inputDrawingBordSize.value = '';
  });