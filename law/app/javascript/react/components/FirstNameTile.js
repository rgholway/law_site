import React from 'react'

const FirstNameTile = props => {
    return(
      <label> {props.label}
        <input
          name={props.name}
          type="text"
          value={props.content}
          onChange={props.handleFirstNameChange}
          />
      </label>
    )
  }

  export default FirstNameTile
