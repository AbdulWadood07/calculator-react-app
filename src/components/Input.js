import React from 'react'
import '../App.css'

function Input(props) {
  return (
    <div className='inputs'>
        <form className='form-1'>
            <input type="text" value={props.inputs} name="" className='' />
        </form>

    </div>
  )
}

export default Input