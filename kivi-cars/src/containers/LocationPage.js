import React, { useEffect, useState } from 'react';
import './css/LocationPage.css';
import Header from "../components/Header/Header";
import Location from '../data/location';
import LocationFilter from '../components/Location/LocationFilter';
import ButtonsToolbar from '../components/ButtonsToolbar/ButtonsToolbar';
import LocationCheckbox from '../components/Filters/Filter/LocationCheckbox';
import TitleBtn from '../components/Button/TitleBtn';
import { Link } from 'react-router-dom';

const LocationPage = (props) => {

    const {data, setData} = props.data
    const [locationData, setLocationData] = useState({})
    const [locationInfo, setLocationInfo] = useState({"gradovi": []})
    const [checkboxStatus, setCheckboxStatus] = useState({})
    const [location, setLocation] = useState({});
    const naslov = "Dodajte lokaciju"

    let id = 0;

    useEffect(() => {
        if(locationData.kanton){
            Location.entiteti.map(entity => {
                return entity.kantoni.map(kantony => {
                    if(locationData.kanton === kantony.kanton){
                        return setLocationInfo({
                            "entitet": entity.entitet,
                            "kanton": kantony.kanton,
                            "gradovi": kantony.gradovi
                        })
                    }
                })
            })
        }setCheckboxStatus({})
            console.log("locationInfo", locationInfo)
    }, [locationData])

    useEffect(() => {
        if(locationData.kanton === 'Distrikt Brcko'){
            setLocation(
                {
                "entitet": "Distrikt Brcko",
                "kanton": "Distrikt Brcko",
                "gradovi": "Brcko"
                }
            )
        }else{
            setLocation( prevData => ({
                ...prevData,
                "entitet": locationInfo.entitet,
                "kanton": locationInfo.kanton,
                "gradovi": checkboxStatus
            }))}
            console.log("location", location)
    }, [checkboxStatus])

    useEffect(() => {
        setData( prevData => ({
            ...prevData,
            "Location": location
        }))
        console.log("data", data)
    }, [location])

    
    return (
        <div className='location-div'>
            <Header header={naslov}/>
            <ButtonsToolbar routes={props.routes}/>
            <LocationFilter data={{setLocationData}}/>
            <div className='checkbox-div'>
                {locationInfo.gradovi.map((grad) => {
                    id += 1
                    return(
                        <LocationCheckbox key={id} title={grad} data={{checkboxStatus, setCheckboxStatus}}/>
                    )
                })}
            </div>
            <Link to="/email">
                <TitleBtn title="Naredna stranica"/>
            </Link>
        </div>
    );
}

export default LocationPage