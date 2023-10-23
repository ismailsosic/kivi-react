import React from "react";
import "./Filters.css";
import Filter from "./Filter/Filter";
import TitleBtn from "../Button/TitleBtn";
import {Link} from 'react-router-dom';
import Color from '../../data/color';
import AirCondition from "../../data/air-condition";
import Seats from "../../data/seats";
import Sensors from "../../data/sensors";
import Gearbox from "../../data/gearbox";
import Lights from "../../data/lights";
import Checkbox from "./Filter/Checkbox";
import CheckBox from "../../data/checkbox";


const AdvancedFilters = (props) => {

    const {filters, setFilters} = props.data
    const data1 = [Color, AirCondition, Seats, Gearbox, Sensors, Lights]
    let index = 0


    return(
        <div className="filters-container">
            <div className="filters-content">
            {
                data1.map(item => {
                    index += 1;
                    return(
                        <Filter key={index} ime={item.ime} tipovi={item.tipovi} data={{filters, setFilters}}/>
                    )
                })
            }
            </div>
            <div className="checkbox-content">
            {
                CheckBox.map(item => {
                    index += 1;
                    return(
                        <Checkbox key={index} title={item} data={{filters, setFilters}}/>
                    )
                })
            }
            </div>

            <div style={{marginTop: 50}}>
                <Link to="/location">
                    <TitleBtn title="Dalje" />
                </Link>
            </div>
        </div>
    )
}

export default AdvancedFilters