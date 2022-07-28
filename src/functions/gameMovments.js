import { rabbitMove } from "./RabbitMove"
import { GAME_CONST_PROPERTIES } from "./constants"
import { wolvesMove } from "./wolvesmove"

const wolf = GAME_CONST_PROPERTIES.wolf.name

const gameMovments = (direction, gameState) => {
  if (gameState.isGameover === true) {
    return gameState
  }
  const moveRabbit = rabbitMove(direction, gameState)
  wolvesMove(moveRabbit, wolf)
  return gameState
}

export { gameMovments }
