// this is just one of the reducers

import { GET_PROFILES , ADD_PROFILE , DELETE_PROFILE , PROFILE_LOADING , GET_SINGLE_PROFILE, UPDATE_PROFILE} from '../actions/types' 
import Profile from '../models/Profile'
import ProfileDetail from '../models/ProfileDetail'
 const initailState = {
    profiles : [
        // {
        //     id : 10,
        //     name : 'Anant',
        //     firstName : 'Anant',
        //     lastName : 'Awasthy',
        //     displayString : 'Hello All',
        //     profileDetail : {
        //         email : 'anant@gmail.com',
        //         phone : '123123123',
        //         age : '16'
        //     }
        // },
        // {
        //     id : 12,
        //     name : 'Anant',
        //     firstName : 'Anant',
        //     lastName : 'Awasthy',
        //     displayString : 'Hello All',
        //     profileDetail : {
        //         email : 'anant@gmail.com',
        //         phone : '123123123',
        //         age : '21'
        //     }
        // },
        // {
        //     id : 11,
        //     name : 'Anant',
        //     firstName : 'Anant',
        //     lastName : 'Awasthy',
        //     displayString : 'Hello All',
        //     profileDetail : {
        //         email : 'anant@gmail.com',
        //         phone : '123123123',
        //         age : '19'
        //     }
        // }
    ],
    profile : {},
    isLoading : true

 }
// on calling this.props.getProfiles() this method get called for GET_PROFILES

 export default function(state = initailState , action){
    switch(action.type){
        case GET_PROFILES:

        const profileList = action.payload.map(p=>{
            const age = Math.floor(Math.random() * (21 - 16 + 1)) + 16;
            const pd = new ProfileDetail(p.email,p.phone, age)
            const pro = new Profile(p.id,p.name,pd)
            pro.displayString = pro.displayAllData()
            return pro
        })

        return {
            ...state,
            profiles : profileList,
            isLoading : false 
        }
        case ADD_PROFILE:
            return {
                ...state,
                profiles : [action.payload, ...state.profiles],
                isLoading : false 
            }
        case DELETE_PROFILE: 
            return {
                ...state,
                profiles : state.profiles.filter(p=> p.id !== action.payload)
            }  

        case PROFILE_LOADING: 
            return {
                ...state,
                isLoading : true
            }            
        case GET_SINGLE_PROFILE: 
            return {
                ...state,
                profile : action.payload
            }

        case UPDATE_PROFILE:
            const p_data = action.payload
            const newPros = state.profiles.map(p=>{
                if(p.id === p_data.id){
                    p.name = p_data.name  
                    p.profileDetail.email = p_data.email 
                    p.profileDetail.phone = p_data.phone
                    p.displayString = p.displayAllData()
                    p.lastName = p.getTheLastName()
                    p.firstName = p.getTheFirstName()
                }
                return p
            })
            return {
                ...state,
                profiles : newPros,
                isLoading : false
            }

        default : 
            return state
    }
 }
