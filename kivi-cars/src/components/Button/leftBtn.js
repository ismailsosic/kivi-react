import './button.css'
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';

const leftBtn = (props) => {
    return ( 
        <div className='left-button'>
            <ArrowLeft/>
        </div>
     );
}

export default leftBtn