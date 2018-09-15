import React, { Component } from 'react'
import TextInputgroup from '../layouts/TextInputgroup'
import axios from 'axios';
import { connect } from 'react-redux'
import { getSingleProfile, updateProfile } from '../../actions/contactActions'
import loading from '../../rolling.gif'

class EditContact extends Component {

    constructor(props){
        super(props)

        this.state = {
            name : '',
            email : '',
            phone : '',
            id : '',
            errors : {},
            isLoading : true,
            isFirstTime : true
        }

        console.log('this.props.location.data :', this.props.location.data);

    }


    componentWillReceiveProps(nextProps, nextState){
        const { name , email , phone } = nextProps.profile
        const { isFirstTime } = this.state
        const isLoading = nextProps.isLoading
        


        if(isFirstTime){
            this.setState({ name , email , phone , isLoading , isFirstTime : false})
        }else {
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
        }
        // setTimeout(()=>{
        //     this.setState({ name , email , phone , isLoading })
        // },500)

    }


    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onAddContactClick = (e) => {


        e.preventDefault()
        let { name , email , phone  } = this.state
        //const p = {name , email , phone}
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
        
        let data = this.state

        if (!this.props.location.data.id){
            return
        }
        data.id = this.props.location.data.id


        this.props.updateProfile(data)
        

        
        
        //console.log('this.state :', this.state);
        //console.log('name :', name);
    }


    componentDidMount(){

        const p = this.props.location.data

        if(p){
            if (p.id.toString().length === 1){
                this.props.getSingleProfile(p.id)
                //this.getDataFronAPI(this.props)
            }else {
                const { id, name , profileDetail } = p
                const { email , phone } = profileDetail
                this.setState({ name , email , phone , id })
            }
        }else {
            const { id } = this.props.match.params
            this.props.getSingleProfile(id)
            //this.getDataFronAPI(this.props)        
        }

        
    }

    async getDataFronAPI(p){
        const { id } = p.match.params
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const {name , email , phone} = res.data
        setTimeout(()=>{
            this.setState({ name , email , phone , id})
        },3000)
        
    }



    render(){

        const { name , email , phone, errors , isLoading } = this.state

        return (
            <div>
                { isLoading ? (<img src={loading} alt="Loading..." style={{ width : '100px' , margin : 'auto', display : 'block' , marginTop : '200px'}}/>) : (
                        <div className="card mt-4 mb-3">
                        <div className="card-header">
                            <h3>Update Contact</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.onAddContactClick.bind(this)}>
    
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
    
                                <input type="submit" value="Update Contact"
                                    className="btn btn-success"
                                />
    
                            </form>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
// receving end
const mapStateToProps = (state) => {
    const data = {
        profile : state.profile.profile,
        isLoading : state.profile.isLoading
    }
    return data
}


export default connect(mapStateToProps,{getSingleProfile , updateProfile})(EditContact)
