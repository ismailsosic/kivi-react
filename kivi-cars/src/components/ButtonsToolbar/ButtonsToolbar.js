import './ButtonsToolbar.css';
import { Link } from 'react-router-dom'
import ArrowLeft from '../Button/leftBtn';
// import ArrowRigh from '../Button/rightBtn';


const ButtonsToolbar = (props) => {
    return (
        <div className='buttons-toolbar'>
            <div className='left-group'>
                <Link to={`${props.routes.prev}`}>
                    <ArrowLeft />
                </Link>
            </div>
            {/* <div className='right-group'>
                <Link to={`${props.routes.next}`}>
                    <ArrowRigh/>
                </Link>
                
            </div> */}
        </div>
    )
} 

export default ButtonsToolbar



