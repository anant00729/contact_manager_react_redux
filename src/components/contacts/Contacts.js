import React , { Component} from 'react'
import Contact from './Contact'
import { Consumer } from '../../context'


class Contacts extends Component {

    componentWillMount(){
    }

    render(){
        return (
            <Consumer>
            {
                value=> (
                    <React.Fragment>
                        <h2 className="display-4 mt-4 lead">
                        <span className="text-primary">Contact</span> List</h2>
                        {value.profiles.map(p=>
                                    (
                                        <Contact 
                                            profile={p} 
                                            key={p.id} 
                                            />
                                    )
                            )
                    
                        }
                    </React.Fragment>
                )
            }
            </Consumer>
        )
    }

    componentDidMount(){
        
    }

    

}

export default Contacts