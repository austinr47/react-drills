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
        list : arr
    })
}
    render() {
        let displayList = {createList}
        


        return (
            <div>
            <input onChange={event => this.handleUserInput(event.target.value)} value={this.state.userInput}/>
            <button onClick={this.createList}> Add </button>

            <p>
                {displayList}
            </p>
            <p>
                {JSON.stringify(this.state)}
            </p>
          </div>
         
        )
    }
}

export default ToDo