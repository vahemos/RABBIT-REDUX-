import {GAME_CONST_PROPERTIES} from  "../constants"
import { Img } from "./DrawImgStyle"


const Draw = (props) => {
  const column = props.column
  let src=""
  if(column === 0){
    return
  }else if (column === GAME_CONST_PROPERTIES.rabbit.name) {
    src = GAME_CONST_PROPERTIES.rabbit.src
  } else if (column === GAME_CONST_PROPERTIES.wolf.name) {
     src=GAME_CONST_PROPERTIES.wolf.src
  } else if (column === GAME_CONST_PROPERTIES.ban.name) {
    src=GAME_CONST_PROPERTIES.ban.src
  } else if (column === GAME_CONST_PROPERTIES.house.name) {
    src=GAME_CONST_PROPERTIES.house.src
  
}
return <Img src={src} alt="" />
}

export { Draw }
