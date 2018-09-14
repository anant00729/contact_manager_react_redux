import React, { Component } from 'react'
import TextInputgroup from '../layouts/TextInputgroup'
import { Consumer } from '../../context'

class AddContact extends Component {

    constructor(props){
        super(props)

        this.state = {
            name : '',
            email : '',
            phone : '',
            errors : {}
        }
    }


    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onAddContactClick = (dispatch,e) => {


        e.preventDefault()
        const { name , email , phone } = this.state
        const p = {name , email , phone}
        let errors = {}
        
        // Check for errors 
        if(name === ''){
            errors.name = 'Name is required' 
            this.setState({ errors })
            return
        }
        if(email === ''){
            errors.email = 'Email is required' 
            this.setState({ errors })
            return
        } 
        if(phone === ''){
            errors.phone = 'Phone is required' 
            this.setState({ errors })
            return
        }


        const action = {
            type : 'ADD_CONTACT',
            payload : {
                profile : p
            }
        }
        dispatch(action)

        // clear states 
        this.setState(
            {
                name : '',
                email : '',
                phone : '',
                errors : {}
            }
        )

        this.props.history.push('/')
        //console.log('this.state :', this.state);
        //console.log('name :', name);
    }



    render(){

        const { name , email , phone, errors } = this.state

        return (

            <Consumer>
                {
                    value => (

                        <div className="card mt-4 mb-3">
                            <div className="card-header">
                                <h3>Add Contacts</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onAddContactClick.bind(this,value.dispatch)}>

                                    <TextInputgroup
                                        name = "name" 
                                        label = "Name"
                                        value = {name}
                                        placeholder = "Enter Name"
                                        type = "text" 
                                        onChange = {this.onChange}
                                        error = { errors.name }
                                    />

                                    <TextInputgroup
                                        name = "email" 
                                        label = "Email"
                                        value = {email}
                                        placeholder = "Enter Email"
                                        type = "email" 
                                        onChange = {this.onChange}
                                        error = { errors.email }
                                    />

                                    <TextInputgroup
                                        name = "phone" 
                                        label = "Phone"
                                        value = {phone}
                                        placeholder = "Enter Phone"
                                        type = "text" 
                                        onChange = {this.onChange}
                                        error = { errors.phone }
                                    />

                                    <input type="submit" value="Add Contact"
                                        className="btn btn-success"
                                    />

                                </form>
                            </div>
                        </div>

                    )
                }


            

            </Consumer>
        )
    }
}

export default AddContact
