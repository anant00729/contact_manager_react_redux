// this is going to be root reducers
import { combineReducers } from 'redux'
import profileReducer from './profileReducer' 

export default combineReducers({
    profile : profileReducer
})