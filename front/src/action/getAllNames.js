import axios from "axios"
import { GET_ALL_GAMES,NEED_BACKUP} from "../actiontypes/actiontypes"


export default function getAllNames() {
    
    

    return (dispatch) => {
        return axios("https://prototypek02.herokuapp.com/api/videogames")
            .then(response => {return dispatch({type: GET_ALL_GAMES, payload: response.data}),dispatch({type: NEED_BACKUP, payload: response.data})})
            .catch(error => {return alert("No Games")})
            

        
    }

    

}