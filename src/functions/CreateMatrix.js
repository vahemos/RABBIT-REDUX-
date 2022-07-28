import { GAME_CONST_PROPERTIES } from "./constants"


const freebox = 0
const rabbit = GAME_CONST_PROPERTIES.rabbit.name

const house = GAME_CONST_PROPERTIES.house.name
const wolf = GAME_CONST_PROPERTIES.wolf.name
const ban = GAME_CONST_PROPERTIES.ban.name

function CreateMatrix(value) {
  let matrix = new Array(parseInt(value))
    .fill(freebox)
    .map(() => new Array(parseInt(value)).fill(freebox))
  return matrix
 
}

function freeCoordinates(matrix) {
  const x = Math.floor(Math.random() * matrix.length)
  const y = Math.floor(Math.random() * matrix.length)
  if (matrix[x][y] === freebox) {
    return [x, y]
  } else {
    return freeCoordinates(matrix)
  }
}

function setMember(gameMember, matrix) {
  const [x, y] = freeCoordinates(matrix)
  matrix[x][y] = gameMember
}

function memberCount(count, matrix, gameMember) {
  for (let i = 0; i < count; i++) {
    setMember(gameMember, matrix)
  }
}

const MemberRandomPossitonInMatrix = (value) => {
  const rabbitCount = 1
  const homeCount = 1
  const wolvesCount = Math.ceil((60 * value) / 100)
  const banersCount = Math.ceil((40 * value) / 100)
  const matrix = CreateMatrix(value)
  freeCoordinates(matrix)
  memberCount(rabbitCount, matrix, rabbit)
  memberCount(homeCount, matrix, house)
  memberCount(wolvesCount, matrix, wolf)
  memberCount(banersCount, matrix, ban)
  return matrix
}

export { MemberRandomPossitonInMatrix }
