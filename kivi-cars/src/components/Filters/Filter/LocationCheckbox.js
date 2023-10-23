import React, { useEffect, useState } from "react";
import './css/LocationCheckbox.css';

const LocationCheckbox = (props) => {

    const {setCheckboxStatus} = props.data;
    const [checked, setChecked] = useState(true)

    const changeHandler = (e) => {
        setCheckboxStatus(prevStatus => ({
            ...prevStatus,
            [e.target.name]: checked
        }))
    }


    return (
        <div className="checkbox">
            <label className="checkbox-title" htmlFor={props.title}>{props.title}</label>
            <input className="check-box" type="checkbox" name={props.title} id={props.title} onChange={(e)=> {
                setChecked(!checked)
                changeHandler(e)
                }}/>
        </div>
    )
}

export default LocationCheckbox;