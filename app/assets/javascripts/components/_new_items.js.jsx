import React, { Component } from "react"

class NewItem extends React.Component {
  render() {
    return (
      <div>
        <input ref='name' placeholder='Enter the name of the item' />
        <input ref='description' placeholder='Enter a description' />
          <button>Submit</button>
      </div>
    )
  }
}
