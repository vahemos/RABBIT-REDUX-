import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { Wrapper, NewBoardBtn, GlobalStyle } from "../StartStyle"

import { Board } from "../Boards"

function App() {
  const currentGameState = useSelector((state) => state)

  const dispatch = useDispatch()
  return (
    <Wrapper>
      <GlobalStyle />
      <NewBoardBtn
        onClick={() => {
          dispatch({
            type: "create-new-game-board",
          })
        }}
      >
        New Board
      </NewBoardBtn>
      {currentGameState.map((gameState, index) => {
        return (
          <Board gameState={gameState} boardNumber={index} key={index}></Board>
        )
      })}
    </Wrapper>
  )
}

export default App
