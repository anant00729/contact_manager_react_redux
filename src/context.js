import React, {Component} from 'react'
import Profile from './models/Profile'
import ProfileDetail from './models/ProfileDetail'
import axios from 'axios'

const Context = React.createContext()

const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT_ITEM': 
        return {
            ...state,
            profiles : state.profiles.filter(p=> p.id !== action.payload)

        }
        
        case 'ADD_CONTACT': 
        const { name , email , phone } = action.payload.profile

        const p2d = new ProfileDetail(email,phone , 18)
        const p2 = new Profile(Math.floor(Math.random()*(999-100+1)+100),name , p2d)

        p2.displayString = p2.displayAllData()

        state.profiles.unshift(p2)

        const data = {
            ...state,
            profiles : state.profiles
        }
        return data
        
        default:
        return state
        
    }
}

export class Provider extends Component {

    state = {
        profiles : [],
        dispatch : (action) => {
            this.setState(state => reducer(state,action))
        }
    }


    

    render(){
        
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }

    async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')

        console.log('res.data :', res.data);

        const profiles = res.data.map((d,i)=>{
            const p1d = new ProfileDetail(d.email,d.phone, i % 2 === 0 ? 16 : 22)
            const p1 = new Profile(d.id , d.name , p1d)

            p1.displayString = p1.displayAllData()
            return p1
        })

        this.setState({ profiles })

    }
}

export const Consumer = Context.Consumer