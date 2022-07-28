import { ResultMessage } from "./ShowMessageStyle"
const ShowMessage = (props) => (
  <ResultMessage>
    {props.gameState.gameStatus === "you lose" ? " You Lose :( " : " You Win ! "}
  </ResultMessage>
)

export { ShowMessage }
