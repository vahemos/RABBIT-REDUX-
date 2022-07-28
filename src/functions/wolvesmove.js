import { GAME_CONST_PROPERTIES } from "./constants"

const freebox = 0

const atacRabbit = (gameState, emptyCellsArr) => {
  const matrix = gameState.gameMatrix
  const massiv = []
  emptyCellsArr.forEach((cell) => {
    const [x, y] = cell
    if (matrix[x][y] === GAME_CONST_PROPERTIES.rabbit.name) {
      gameState.isGameover = true
      gameState.gameStatus = "you lose"
      return gameState
    } else if (matrix[x][y] === freebox) {
      massiv.push([x, y])
    }
  })
  return massiv
}

const getCordinat = (gameState, [x, y]) => {
  const cells = [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
  ]
  return cells.filter((cell) => isInRange(gameState, cell))
}

const isInRange = (gameState, [x, y]) =>
  x >= 0 &&
  x < gameState.gameMatrix.length &&
  y >= 0 &&
  y < gameState.gameMatrix.length

const getClosestCell = (freeBoxes, gameState) => {
  const rabbitCords = getMemberPosition(
    gameState,
    GAME_CONST_PROPERTIES.rabbit.name
  )
  const distaceArray = []
  freeBoxes.forEach((cord) => {
    if (gameState.isGameover === true) {
      return
    }
    const distanceSingle = distance(cord, rabbitCords[0])
    distaceArray.push(distanceSingle)
  })
  return distaceArray
}

const distance = (wolf, rabbit) => {
  const [x, y] = wolf
  const [z, k] = rabbit
  return Math.round(Math.sqrt(Math.pow(x - z, 2) + Math.pow(y - k, 2)))
}

const getMinDistance = (distaceArray, freeBoxes) => {
  const min = Math.min(...distaceArray)
  const index = distaceArray.indexOf(min)
  return freeBoxes[index]
}

const moveSingleWolfToNewPosition = ([x, y], [z, k], gameState) => {
  const matrix = gameState.gameMatrix
  matrix[z][k] = freebox
  matrix[x][y] = GAME_CONST_PROPERTIES.wolf.name

  return gameState
}

const getMemberPosition = (gameState, gameMember) => {
  const matrix = gameState.gameMatrix
  const findeposs = function (accum, row, x) {
    row.forEach((item, y) => {
      if (gameState.isGameover === true) {
        return gameState
      }
      if (item === gameMember) {
        accum.push([x, y])
      }
    })
    return accum
  }
  return matrix.reduce(findeposs, [])
}

const wolvesMove = (gameState, member) => {
  const wolvesCorrentPossition = getMemberPosition(gameState, member)
  wolvesCorrentPossition.forEach((wolf) => {
    if (gameState.isGameover === true) {
      return gameState
    }
    const cells = getCordinat(gameState, wolf)
    const wolfNextStep = atacRabbit(gameState, cells)
    const distanceArray = getClosestCell(wolfNextStep, gameState)
    const closestCell = getMinDistance(distanceArray, wolfNextStep)
    if (gameState.isGameover === false) {
      moveSingleWolfToNewPosition(closestCell, wolf, gameState)
    }
  })

  return gameState
}

export { wolvesMove }
