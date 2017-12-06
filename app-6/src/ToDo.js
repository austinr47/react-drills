import React, { Component } from 'react';

class ToDo extends Component {
    constructor(props) {
        super() 
        this.state ={
            userInput: '',
            list: [],
        }

        this.handleUserInput = this.handleUserInput.bind(this)
        this.addToList = this.addToList.bind(this)
        this.createList = this.createList.bind(this)
    }

handleUserInput(props) {
    this.setState ({
        userInput: props
    })
}

addToList() {
    this.setState({
        list: this.state.userInput
    })
}


createList() {
    let arr = []
    arr.push(this.state.userInput)
    this.setState({
        list: arr
    })
}
    render() {
        let list = this.state.list.map( ( element, index ) => {
            return (
              <userInput key = { index } task={ element } />
            )
          })

        return (
            <div>
            <input onChange={event => this.handleUserInput(event.target.value)} value={this.state.userInput}/>
            <button onClick={this.createList}> Add </button>

            <p>
                {list}
            </p>
            <p>
                {JSON.stringify(this.state)}
            </p>
          </div>
         
        )
    }
}

export default ToDo