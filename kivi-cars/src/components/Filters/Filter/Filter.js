import React from "react";
import './css/Filter.css';

const Filter = (props) => {

    const {setFilters} = props.data

    const changeHandler = ( e ) => {
        setFilters( prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    return(
        <div className="filter-component">
            <label htmlFor={props.ime} className="filter-name">{props.ime}</label>
            <select className="dropdown-list" name={props.ime} id={props.ime} onChange={(e) => changeHandler(e)}>
                {props.tipovi.map((tip, i) => {
                    return (
                        <option key={i} value={tip} name={tip}>{tip}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Filter;