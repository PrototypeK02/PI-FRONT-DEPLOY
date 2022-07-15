import axios from "axios"
import { GET_VIDEOGAME_NAME, NOT_FOUND } from "../actiontypes/actiontypes"

export function onSearch(name,dispatch) {
  
    axios(`https://prototypek02.herokuapp.com/api/videogames?name=${name}`)
    .then(response => {if(response.data.length < 100) {return dispatch({type: GET_VIDEOGAME_NAME, payload: response.data})} else {throw new Error("Not Found")}})
    .catch(() => {
      return dispatch({type: NOT_FOUND, payload: "Error"})
    })

    
    
}