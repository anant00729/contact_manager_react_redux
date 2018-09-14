import React, { Component } from 'react'


class Test extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : '',
            body : ''
        }
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    render(){
        const { title , body } = this.state
        return (
            <div className="container">
                <p className="display-4 lead mt-4">{title}</p>
                <p className="display-5 lead mt-2">{body}</p>
            </div>
        )
    }

    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await res.json()
        const { title , body } = data
        this.setState({title,body})

        console.log('data :', data);
    }

    componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
}

export default Test