import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import "./Filters.css";
import Filter from "./Filter/Filter";
import DoubleFilter from "./Filter/DoubleFilter";
import TitleBtn from "../Button/TitleBtn";
import vehicleService from "../../services/vehicle-service";

const StandardFilters = (props) => {

    const {data, filters, setFilters} = props.data;
    const [brandIndex, setBrandIndex] = useState(0);
    let index = 0;
    let details, marke;

    details = vehicleService(data.Category.Vozilo);
    const {show, brands, data1, data2, data3} = details;

    const [model, setModel] = useState(show);


    useEffect(() => {
        if(filters.Marka)setBrandIndex(marke.indexOf(filters.Marka))
    }, [filters])


    marke = brands.map(marka => {return marka.brand})

    return(
        <div className="filters-container">
            <Filter ime={"Marka"} tipovi={marke} data={{data, filters, setFilters}}/>
            {model ? (<Filter ime={"Model"} tipovi={brands[brandIndex].models} data={{data, filters, setFilters}}/>): null}

            {data1.map(item => {
                index += 1;
                return(
                    <Filter key={index} ime={item.ime} tipovi={item.tipovi} data={{data, filters, setFilters}}/>
                )
            })}

            {data2.map(item => {
                index += 1;
                return(
                    <DoubleFilter key={index} title={item.title} fields={item.fields} data={{data, filters, setFilters}}/>
                )
            })}
            
            {data3.map(item => {
                index += 1;
                return(
                    <Filter key={index} ime={item.ime} tipovi={item.tipovi} data={{data, filters, setFilters}}/>
                )
            })}

            <div style={{marginTop: 50}}>
                <Link to="/location">
                    <TitleBtn title="Dalje" />
                </Link>
            </div>
        </div>
    )
}

export default StandardFilters