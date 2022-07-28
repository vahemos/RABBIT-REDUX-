import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url("../img/background.jpg");
    background-repeat: no-repeat;  
    background-size: cover;
    padding: 0;
    margin: 0;
    background-color: #8fcde5;
  }`

const Wrapper = styled.div`
 text-align: center;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StartBtn = styled.button`
  text-align: center;
  border: 2px solid #34e943;
  font-size: 20px;
  width: 100px;
  padding: 2px;
  margin: 3px;
  margin-bottom: 5px;
  border-radius: 20px;
  outline: none;
  background-color: #5b3a97;
  cursor: pointer;
  color: white;
  cursor: pointer;
`
const NewBoardBtn = styled.button`
  text-align: center;
  border: 2px solid #34e943;
  font-size: 20px;
  width: 100px;
  padding: 2px;
  margin: 3px;
  border-radius: 20px;
  outline: none;
  background-color: #5b3a97;
  cursor: pointer;
  color: white;
  cursor: pointer;
`
const DelBtn = styled.button`
text-align: center;
border: 2px solid #34e943;
font-size: 15px;
width: 100px;
padding: 4px;
margin: 3px;
margin-bottom: 5px;
border-radius: 20px;
outline: none;
background-color: red;
cursor: pointer;
color: white;
cursor: pointer;
`

const UpDownBtns = styled(DelBtn)`
background-color: blue;
font-weight: 900;
`



const DirectionBtn = styled.button`
  position: relative;
  bottom: ${(props) => props.direction === "down" || props.direction === "right" ? "30px" : ""};
  bottom: ${(props) => props.direction === "right"  ? "40px" : ""};
  bottom: ${(props) => props.direction === "down" ? "40px" : ""};
  left: ${(props) => props.direction === "right" ? "80px" : ""};
  right: ${(props) => props.direction === "left" ? "80px" : ""};
  
  text-align: center;
  border: 2px solid #34e943;
  font-size: 20px;
  width: 100px;
  padding: 4px;
  margin-top: 2px;
  border-radius: 20px;
  outline: none;
  background-color: #5b3a97;
  cursor: pointer;
  color: white;
`
const SelectBtn = styled.select`
  text-align: center;
  border: 2px solid #34e943;
  font-size: 20px;
  width: 100px;
  padding: 2px;
  margin: 3px;
  border-radius: 20px;
  outline: none;
  background-color: #5b3a97;
  cursor: pointer;
  color: white;
`
export { Wrapper, StartBtn, NewBoardBtn, DirectionBtn, SelectBtn, DelBtn, UpDownBtns, GlobalStyle }
