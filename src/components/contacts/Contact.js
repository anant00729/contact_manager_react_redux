import React , { Component } from 'react'
import loading from '../../loading.gif'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteProfile } from '../../actions/contactActions'


class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen : true,
            isLoading : false
        }
    }
    componentWillMount(){
    }

    componentWillReceiveProps(){
        

    }

    

    render(){

        const { profile } = this.props
        const { isOpen , isLoading} = this.state
        let p = profile

        return (
            
                <div className="card mt-4">
                    <div className="card-header">
                        {/* Name of the Contact Person */}
                        <h1 className="display-5 lead mt-3">
                            <span className="text-primary">{p.firstName}</span>
                            &nbsp;
                            {p.lastName}
                            &nbsp;
                        {/* For changing the thumbs Up and Thumbs Dwon */}
                        <i 
                            className={isOpen ? "fas fa-minus mb-2 ml-2" : "fas fa-plus mb-2 ml-2"} 
                            onClick={this.onShowClick}
                            style={{ cursor : 'pointer' , fontSize : '16px'}}/>

                        {/* Cross for the deleting the contact person */}
                        

                        {isLoading ? (<img src={loading} alt="Loading..." style={{ width : '45px' ,float : 'right', marginTop : '-12px', marginRight : '1px' }}/>) : 
                            (<i
                                className="fas fa-times mr-3" 
                                style={{float : 'right', color : 'red', cursor : 'pointer', paddingLeft : '16px' }}
                                onClick={this.onCrossClick.bind(this,p.id)}
                            />)
                        }
                        
                        <Link to={{ pathname : `/contact/edit/${p.id}`, data : p}} >
                            <i className="fas fa-pen-square"
                                style={{float : 'right', cursor : 'pointer'}}/>
                        </Link>
                        
                        </h1> 
                        
                    </div>
                    {/* Show Card Body for isOpen */}
                    {isOpen ? (
                        <div className="card-body">
                        <p>
                            <span>
                            {p.profileDetail.email}
                            </span>
                            <br/>
                            <span>
                            {p.profileDetail.phone}
                            </span>
                            <br/>
                            <span>
                            {p.displayString}
                            </span>
                        </p>
                    <button className={p.profileDetail.btnClassName}>{p.profileDetail.btnMessage}</button>
                </div>
                ) : null}

                    
            </div>
        )
    }

    onShowClick = () => {
        this.setState({ isOpen : !this.state.isOpen})
    }

    onCrossClick = (id) => {
        if (id.toString().length === 1){
            this.props.deleteProfile(id)   
        }else {
            setTimeout(()=>{
                this.props.deleteProfile(id)                           
            },2000)
        }
        
        this.setState({ isLoading : true })
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    

    componentDidMount(){

    }
}

const mapStateToProps = (state) => {
    const data = {
        isLoading : state.profile.isLoading
    }
    return data
}


export default connect(mapStateToProps,{ deleteProfile })(Contact)