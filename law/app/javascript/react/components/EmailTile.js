import React from 'react'

const EmailTile = props => {
    return(
      <label> {props.label}
        <input
          name={props.name}
          type="text"
          value={props.content}
          onChange={props.handleEmailChange}
          />
      </label>
    )
  }

  export default EmailTile
