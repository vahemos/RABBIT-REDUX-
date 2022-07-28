import { createStore } from "redux"
import { GameStateReducer, initialGameState } from "./reducers"

const store = createStore(
  GameStateReducer,
  initialGameState,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)

export { store }
