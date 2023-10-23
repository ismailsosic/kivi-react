import React, { useState } from "react";
import './css/Checkbox.css';

const Checkbox = (props) => {


    const {setFilters} = props.data
    const [isChecked, setIsChecked] = useState(true)


    const changeHandler = ( event ) => {
        setFilters(prevData => ({
            ...prevData,
            [event.target.name]: isChecked
        }))
    }

    return(
        <div className="checkbox-div">
            <label className="checkbox-title" htmlFor={`${props.title}`}>{props.title}</label>
            <input type="checkbox" name={props.title} className="checkbox" id={`${props.title}`} onChange={(e) => {changeHandler(e); setIsChecked(!isChecked)}}/>
        </div>
    )
}

export default Checkbox;