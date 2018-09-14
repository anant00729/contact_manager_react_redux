import React , {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
    render(){
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand">Contact Manager</Link>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact/add" className="nav-link">Add Contact</Link>
                            </li>


                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About Us</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/test" className="nav-link">Test</Link>
                            </li>
                        </ul>
                    </div>
                </div>                    
            </nav>
      
        )
    }
}

export default Header


