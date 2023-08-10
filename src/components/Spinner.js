import React, { Component } from 'react'
import simage from './spin.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className = "text-center m-5">
        <img src = {simage} alt = "loading"/>
        <br />
        <br />
        <strong>Loading</strong>
      </div>
    )
  }
}

export default Spinner;
