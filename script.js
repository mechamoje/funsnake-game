let snake = []
let positionX = 10
let positionY = 10
let foodX = 15
let foodY = 15
let velX = 0
let velY = 0
let grid = 28
let tam = 3
let score = 0
const scorePointsHeader = document.querySelector('#score-points-header')
const scorePoints = document.querySelector('#score-points')

window.onload = function () {
  canvas = document.querySelector('#canvas')
  ctx = canvas.getContext('2d')

  setInterval(jogo, 100)

  // Controles
  document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
      // right arrow
      case 39:
        velX = 1
        velY = 0
        break
      // left arrow
      case 37:
        velX = -1
        velY = 0
        break
      // up arrow
      case 38:
        velY = -1
        velX = 0
        break
      // down arrow
      case 40:
        velY = 1
        velX = 0
        break
    }
  })
}

function jogo() {
  // screen
  ctx.fillStyle = '#4E3728'
  // distancia borda h, distancia borda v, largura, altura
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // snake
  positionX += velX
  positionY += velY

  // Espelhamento
  if (positionX < 0) {
    positionX = grid
  }
  if (positionX > grid) {
    positionX = 0
  }
  if (positionY < 0) {
    positionY = grid
  }
  if (positionY > grid) {
    positionY = 0
  }

  // snake settings
  ctx.fillStyle = '#29AB87'
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x * grid, snake[i].y * grid, grid - 1, grid - 1)
    if (snake[i].x == positionX && snake[i].y == positionY) {
      tam = 3
      scorePointsHeader.innerText = 0
    }
  }

  // position
  snake.push({ x: positionX, y: positionY })

  while (snake.length > tam) {
    snake.shift()
  }

  // food
  ctx.fillStyle = '#ED820E'
  ctx.fillRect(foodX * grid, foodY * grid, grid - 1, grid - 1)

  // eating
  if (positionX == foodX && positionY == foodY) {
    tam++
    score += 5
    scorePointsHeader.innerText = score
    foodX = Math.floor(Math.random() * grid)
    foodY = Math.floor(Math.random() * grid)
  }
}
