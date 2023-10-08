import React, { Component } from 'react'
import loading from './loading.gif'



export class Spinner extends Component {
  render() {
    return (
      <div className='text-center mx-1'>
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}

export default Spinner
