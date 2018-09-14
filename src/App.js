import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import Header from './components/layouts/Header'
import Contacts from './components/contacts/Contacts'
import AddContact from './components/contacts/AddContact'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import Test from './components/pages/Test'
import EditContact from './components/contacts/EditContact'
import { Provider } from './context'



// App Child Class
// Component Parent Class

class App extends Component {

  componentWillMount(){
    
  }

  render(){
    return (
      <Provider>
        <Router>
          <div>
            <Header/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact/add" component={AddContact}/>
                <Route exact path="/test" component={Test}/>
                <Route exact path="/contact/edit/:id" component={EditContact}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }

  componentDidMount(){
    
  }
}

export default App;