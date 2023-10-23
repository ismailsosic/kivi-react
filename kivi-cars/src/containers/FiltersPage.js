import {React, useEffect, useState} from "react";
import './css/FiltersPage.css';
import Header from "../components/Header/Header";
import ButtonsToolbar from "../components/ButtonsToolbar/ButtonsToolbar";
import FiltersNav from '../components/FiltersNavbar/FiltersNav';
import StandardFilters from "../components/Filters/Standard-filters";
import AdvancedFilters from "../components/Filters/Advanced-filters";

const FiltersPage = (props) => {

    const naslov = "Filteri za pretrazivanje"
    const [toggle, setToggle] = useState(true)
    const [filters, setFilters] = useState({});
    const {data, setData} = props.data
    

    useEffect(() => {
        setData( prevData => ({
            ...prevData,
            "Filters": filters
        }))
    }, [filters])

    const showFilters = (toggle) => {
        if(toggle){
            return <StandardFilters data={{data, filters, setFilters}}/>
        }
        return <AdvancedFilters data={{data, filters, setFilters}}/>;
    }

    return(
        <div className="FiltersPage">
            <Header header={naslov}/>
            <ButtonsToolbar routes={props.routes}/> 
            <FiltersNav toggle={{toggle, setToggle}}/>
            {showFilters(toggle)}
        </div>
    )
}

export default FiltersPage;