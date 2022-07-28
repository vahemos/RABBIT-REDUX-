import styled from "styled-components"

const Box = styled.div`
  border-radius: 5px;
  width: 35px;
  height: 35px;
  margin: 1px;
  background-color: rgb(98, 236, 86);
`

const GameZone = styled.div`
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: rgb(192, 96, 247);
  padding: 2px;
  border-radius: 20px;
  border: rgba(13, 132, 158, 0.5) 3px solid;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export { Box, GameZone }
