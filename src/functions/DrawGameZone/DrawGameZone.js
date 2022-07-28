import React from "react"
import { Draw } from "../DrowImg/DrawImg"
import { Box } from "./DrawGameZoneStyler"
import { GameZone } from "./DrawGameZoneStyler"

const DrawGameZone = (props) => {
  const matrix = props.matrix
  const divStyle = {
    width: matrix.length * 35 + 20 + "px",
  }
  return (
    <GameZone style={divStyle}>
      {matrix.map((row, k) =>
        row.map((column, i) => {
          return (
            <Box key={`${k}${i}`}>
              <Draw column={column} />
            </Box>
          )
        })
      )}
    </GameZone>
  )
}
export { DrawGameZone }
