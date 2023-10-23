import React from 'react'
import './button.css'

const StandardBtn = (props) => {

    const {setData, filter} = props.data

    const clickHandler = ( e ) => {
        setData( prevState => ({
            ...prevState,
            "Category":{
                [e.target.name]: e.target.value
            }
        }))
    }

    return (
        <div className='standard-btn'>
           <button name={filter} value={props.title} className='standardBtn' onClick={e => clickHandler(e)}>{props.title}</button>
        </div>
    )
}

export default StandardBtn