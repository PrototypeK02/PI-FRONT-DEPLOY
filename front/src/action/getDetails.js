import axios from "axios"
import { GET_VIDEOGAME_DETAIL } from "../actiontypes/actiontypes"

export default function getDetails(id,dispatch) {

    axios(`https://prototypek02.herokuapp.com/api/videogames/${id}`)
    .then(response => {return dispatch({type: GET_VIDEOGAME_DETAIL, payload: response.data})})
    .catch(e => alert(e.response.data))


}