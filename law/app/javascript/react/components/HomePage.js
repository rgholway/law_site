import React, { Component } from 'react'
import FirstNameTile from './FirstNameTile'
import LastNameTile from './LastNameTile'
import EmailTile from './EmailTile'
import MessageTile from './MessageTile'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      message: "",
      email: ""
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
  }

  handleFirstNameChange(event) {
  this.setState({ firstName: event.target.value})
  }

  handleLastNameChange(event) {
  this.setState({ lastName: event.target.value})
  }

  handleEmailChange(event) {
  this.setState({ email: event.target.value})
  }

  handleMessageChange(event) {
  this.setState({ message: event.target.value})
  }

  handleSubmit(event) {
  event.preventDefault()
  let formPayload = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    message: this.state.message,
    email: this.state.email
    }
  this.sendEmail(formPayload)
  }

  sendEmail(formPayload){
    let jsonStringInfo = JSON.stringify(formPayload)
      fetch(`/api/v1/emails`, {
        method: 'POST',
        body: jsonStringInfo,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' },
        credentials: 'same-origin'
      })
      .then(formPayload => formPayload.json())
    }

  render() {
    console.log(this.state.email)
    return(
    <div>
    <form onSubmit={this.handleSubmit}>
          <FirstNameTile
            content={this.state.firstName}
            label= {"First Name:"}
            name="first-name"
            handleFirstNameChange={this.handleFirstNameChange}
            />
          <LastNameTile
              content={this.state.lastName}
              label= {"Last Name:"}
              name="last-name"
              handleLastNameChange={this.handleLastNameChange}
              />
          <EmailTile
              content={this.state.email}
              label= {"What is your email?"}
              name="email"
              handleEmailChange={this.handleEmailChange}
              />
          <MessageTile
              content={this.state.message}
              label= {"Your Message"}
              name="message"
              handleMessageChange={this.handleMessageChange}
              />
          <input className="button" type="submit" value="Send Message"/>
        </form>
    </div>
    )}
  }

  export default HomePage
