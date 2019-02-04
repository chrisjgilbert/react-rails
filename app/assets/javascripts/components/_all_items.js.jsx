import React, { Component } from "react"

class AllItems extends React.Component {

  getInitialState() {
    return { items: [] }
  }

  componentDidMount() {
    $.getJSON('api/v1/items.json', (response) => {
      this.setState({ items: response })
    })
  }

  render() {
    let items = this.state.items.map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      )
    })
    return (
      <div>
        {items}
      </div>
    )
  }
}
