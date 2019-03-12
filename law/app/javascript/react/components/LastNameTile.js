import React from 'react'

const LastNameTile = props => {
    return(
      <label> {props.label}
        <input
          name={props.name}
          type="text"
          value={props.content}
          onChange={props.handleLastNameChange}
          />
      </label>
    )
  }

  export default LastNameTile
