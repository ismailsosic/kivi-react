import './FiltersNav.css';

const FiltersNav = (props) => {

    const {toggle, setToggle} = props.toggle;


    return(
        <div className="links-container">
            <ul className="filters-links">
                <li className={toggle ? `filters-link active`: `filters-link`} onClick={() => setToggle(true)}>
                    <p id="standard-filters" >Filteri</p>
                </li> 
                <li className={!toggle ? `filters-link active`: `filters-link`} onClick={() => setToggle(false)}>
                    <p id="advanced-filters" >Napredni filteri</p>
                </li>
            </ul>
        </div>
    )
}

export default FiltersNav;