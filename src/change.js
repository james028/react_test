import React, { Component } from 'react'

export default class Change extends Component {
  
  render() {
    return (
      <div>
        {this.props.maail.map((e,i) => {
              return <p key={i}>{e}</p>
          })}
      <input 
      type="text"
      placeholder={this.props.placeholder}
      value={this.props.value}
      onChange={this.props.onChange}
      />
      <p>{this.props.value}</p>
      </div>  
    )
  }
}
