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
        list: [this.state.userInput]
    })

}

    render() {
        let displayList = this.state.list.map((item, index) => {
    return(
        <h2 key={index}> {item}</h2>
    )
        })

        return (
            <div>
            <input onChange={event => this.handleUserInput(event.target.value)} value={this.state.userInput}/>
            <button onClick={this.addToList}> Add </button>

            <p>
                {displayList}
                {JSON.stringify(this.state)}
            </p>
          </div>
         
        )
    }
}

export default ToDo