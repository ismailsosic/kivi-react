import './Header.css'


const Header = (props) => {
    return (
        <header>
            <h3 className="title">{props.header}</h3>
        </header>
    )
}

export default Header