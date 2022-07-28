import { useState } from "react"
import { useDispatch } from "react-redux"
import { StartBtn, DirectionBtn, DelBtn, UpDownBtns } from "./StartStyle"
import { ShowMessage } from "./functions/ShowMessage/ShowMessage"
import { DrawGameZone } from "./functions/DrawGameZone/DrawGameZone"
import { Select } from "./Select"

const directionButtons = ["up", "left", "right", "down"]
const Board = ({ gameState, boardNumber }) => {
  console.log(boardNumber, "aaaaaaaaaaa")
  const dispatch = useDispatch()
  const [selectValue, setSelectValue] = useState(5)
  const selectChange = (e) => setSelectValue(parseInt(e.target.value))
  return (
    <div>
      <StartBtn
        onClick={() => {
          dispatch({
            type: "game-start",
            payload: {
              selectValue: selectValue,
              boardNumber: boardNumber,
            },
          })
        }}
      >
        Start
      </StartBtn>
      <Select onChange={selectChange} value={selectValue}></Select>
      <DelBtn
        onClick={() => {
          dispatch({
            type: "del-board",
            payload: gameState.boardNumber,
          })
        }}
      >
        Delete Board
      </DelBtn>
      <br />
      <UpDownBtns
        onClick={() => {
          dispatch({
            type: "move-up",
            payload: boardNumber,
          })
        }}
      >
        &#8743;
      </UpDownBtns>

      <UpDownBtns
        onClick={() => {
          dispatch({
            type: "move-down",
            payload: boardNumber,
          })
        }}
      >
        &#8744;
      </UpDownBtns>

      {gameState.isGameover === true ? (
        <ShowMessage gameState={gameState} />
      ) : (
        <DrawGameZone matrix={gameState.gameMatrix} />
      )}
      <div>
        {directionButtons.map((direction, i) => {
          return (
            <div key={i}>
              {gameState.isGameover === false &&
              gameState.gameMatrix.length > 0 ? (
                <DirectionBtn
                  direction={direction}
                  onClick={() => {
                    dispatch({
                      type: "change-game-state",
                      payload: {
                        direction: direction,
                        boardNumber: boardNumber,
                      },
                    })
                  }}
                >
                  {direction.toUpperCase()}
                </DirectionBtn>
              ) : (
                ""
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export { Board }
