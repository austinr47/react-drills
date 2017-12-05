import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }

this.handleUpdateUsername = this.handleUpdateUsername.bind(this)
this.handleUpdatePassword = this.handleUpdatePassword.bind(this)
this.loginUser = this.loginUser.bind(this)

    }

    handleUpdateUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleUpdatePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    loginUser() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }


    render() {
        return (
          <div>
            <input onChange={this.handleUpdateUsername} value={this.state.username}/>
            <input onChange={this.handleUpdatePassword} value={this.state.password}/>
            <button onClick={this.loginUser}> Login </button>
          </div>
        )
      }
    }


export default Child