import React , { Component} from 'react'
import Contact from './Contact'
import { connect } from 'react-redux'
import { getProfiles } from '../../actions/contactActions'
import PropTypes from 'prop-types'
import loading from '../../rolling.gif'



class Contacts extends Component {

    
    componentWillMount(){
        
    }

    render(){
        let { profiles, isLoading } = this.props
        
        return (
            
            <React.Fragment>
                <h2 className="display-4 mt-4 lead">
                <span className="text-primary">Contact</span> List</h2>
                {isLoading ? 
                (<img src={loading} alt="Loading..." style={{ width : '100px' , margin : 'auto', display : 'block' , marginTop : '200px'}}/>) : 
                (profiles.map(p=>
                    (
                        <Contact 
                            profile={p} 
                            key={p.id} 
                            />
                    )
                ))}
                
                
            </React.Fragment>
        )
    }

    componentDidMount(){
        const { profiles } = this.props 

        if(profiles.length === 0){
            this.props.getProfiles()
        }
        
    }

    
}

Contacts.protoTypes = {
    profiles : PropTypes.array.isRequired,
    getProfiles : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    const data = {
        profiles : state.profile.profiles,
        isLoading : state.profile.isLoading
    }

    return data
}

// const mapDispatchToProps = (dispatch) => {
//     const data = {
//         getProfiles : () => dispatch({type : GET_PROFILES}) 
//     }
//     return data
// }

export default connect(mapStateToProps,{ getProfiles })(Contacts)