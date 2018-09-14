import React, {Component} from 'react'
import classnames from 'classnames'

class TextInputGroup extends Component {

    render(){
        const { name , label , value , placeholder, type , onChange, error } = this.props

        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input type={type}
                className={classnames('form-control form-control-md' , { 'is-invalid' : error })}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                />
                {
                    error ? 
                    (<div className="invalid-feedback">{error}</div>) :
                    null
                }
                
            </div>
        )
    }

}

export default TextInputGroup