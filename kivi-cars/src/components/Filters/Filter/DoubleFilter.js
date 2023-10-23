import React, {useEffect, useState} from "react";
import "./css/DoubleFilter.css";

const DoubleFilter = (props) => {

    const {setFilters} = props.data
    const [doubleFilterData, setDoubleFilterData] = useState({})

    const changeHandler = ( e ) => {
        setDoubleFilterData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value     
        }))
    }

    useEffect(() => {
        setFilters(prevData => ({
            ...prevData,
            [props.title]: doubleFilterData
        }))
    }, [doubleFilterData])

    return (
        <div className="doubleFilter-component">
            <label htmlFor="filters-div">{props.title}</label>
            <div className="double-filters" id="filters-div">
                <div className="filter">
                <label htmlFor="od" className="filter-info">Od</label>
                <input placeholder="Unesite" id="od" name="Od" className="filter-number" type="number" min={props.fields.min} max={props.fields.max} onChange={(e) => changeHandler(e)}/>
                </div>
                <div className="filter"> 
                <label htmlFor="do" className="filter-info">Do</label>
                <input placeholder="Unesite" id="do" name="Do" className="filter-number" type="number" min={props.fields.min} max={props.fields.max} onChange={(e) => changeHandler(e)}/>
                </div>
            </div>
        </div>
    )
}

export default DoubleFilter;