import React from "react";
import './LocationFilter.css';
import Location from "../../data/location";

const LocationFilter = (props) => {

    const {setLocationData} = props.data;

    const clickHandler = (e) => {
        setLocationData( prevData => ( {
                ...prevData,
                "kanton": e.target.value
            }))
    }


    return (
        <div className="locationFilter-div">
            <label className="location-title" htmlFor={Location.ime}>Izaberite lokaciju:</label>
            <select name={Location.ime} id={Location.ime} onChange={(e) => clickHandler(e) }>
                <option value="Svi">Svi</option>
                <optgroup label={Location.entiteti[0].entitet}>
                    {Location.entiteti[0].kantoni.map((kanton, i) => {
                        return(
                            <option key={i} name="kanton" value={kanton.kanton}>{kanton.kanton}</option>
                        )
                    })}
                </optgroup>
                <optgroup label={Location.entiteti[1].entitet}>
                    {Location.entiteti[1].kantoni.map((kanton, i) => {
                        return(
                            <option key={i} name="kanton" value={kanton.kanton}>{kanton.kanton}</option>
                        )
                    })}
                </optgroup>
                <option style={{fontWeight: "bold"}} name="distrikt" value={Location.entiteti[2].entitet}>{Location.entiteti[2].entitet}</option>
            </select>
        </div>
    )
}

export default LocationFilter;