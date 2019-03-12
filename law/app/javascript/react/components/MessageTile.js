import React from 'react'

const MessageTile = props => {
    return(
      <label> {props.label}
        <input
          name={props.name}
          type="text"
          value={props.content}
          onChange={props.handleMessageChange}
          />
      </label>
    )
  }

  export default MessageTile
