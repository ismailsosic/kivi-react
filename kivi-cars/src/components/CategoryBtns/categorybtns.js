import './categorybtns.css'
import StandardBtn from '../Button/StandardBtn'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const CategoryBtns = (props) => {

    let auto = 'Auto';
    let motor = 'Motor';
    let kamion = 'Teretno vozilo';
    let filter = 'Vozilo';

    const {data, setData} = props.data;

    return ( 
        <div className='category-btns'>
            <Link to='/filters'>
                <StandardBtn title={auto} data={{data, setData, filter}}/>
            </Link>
            <Link to='/filters'>
                <StandardBtn title={motor} data={{data, setData, filter}}/>
            </Link>
            <Link to='/filters'>
                <StandardBtn title={kamion} data={{data, setData, filter}}/>
            </Link>
            
        </div>
    )

}

export default CategoryBtns