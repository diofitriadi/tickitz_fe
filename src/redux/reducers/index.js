import { combineReducers } from "redux"
import Movies from "./Movies"
import Auth from "./Auth"
import  Register  from "./Register"

const rootReducers = combineReducers({
    movies: Movies,
    auth: Auth,
    register: Register
})


export default rootReducers