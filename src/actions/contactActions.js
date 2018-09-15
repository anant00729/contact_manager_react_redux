import { GET_PROFILES, ADD_PROFILE , DELETE_PROFILE, PROFILE_LOADING, GET_SINGLE_PROFILE, UPDATE_PROFILE } from './types'
import axios from 'axios'


export const getProfiles = () => async dispatch => {
    dispatch({ type : PROFILE_LOADING })
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')

    const action = {
        type : GET_PROFILES,
        payload : res.data
    }

    dispatch(action) 
}

export const getSingleProfile = id => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (res.data){
        const action = {
            type : GET_SINGLE_PROFILE,
            payload : res.data
        }
        dispatch(action)
    }

}

export const addProfile = p => async dispatch => {
    dispatch({ type : PROFILE_LOADING })
    const { name , id , profileDetail } = p
    const { email, phone, age }= profileDetail 
    const profile = { id ,name , email , phone , age }
    const res = await axios.post(`https://jsonplaceholder.typicode.com/users/`, profile)

    if(res){
        const action = {
            type : ADD_PROFILE,
            payload : p
        }
        dispatch(action)
    }
    
}


export const deleteProfile = id => async dispatch => {
    
    if (id.toString().length === 1 ){
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if(res){

            const action = {
                type : DELETE_PROFILE,
                payload : id
            }
        

            dispatch(action)
        }
    }else {

        const action = {
            type : DELETE_PROFILE,
            payload : id
        }
    
        dispatch(action)
    }
}

export const updateProfile = profile => async dispatch => {
    dispatch({ type : PROFILE_LOADING })
    if(profile.id.toString().length === 1){
        
        const res = await axios.patch(`https://jsonplaceholder.typicode.com/users/${profile.id}`, profile)
        if(res.data){

            const action = {
                type : UPDATE_PROFILE,
                payload : res.data
            }
            dispatch(action)
        }
    }else {
        const action = {
            type : UPDATE_PROFILE,
            payload : profile
        }
        dispatch(action)
    }
    
}
