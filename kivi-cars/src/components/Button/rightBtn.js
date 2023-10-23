import './button.css'
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

const rightBtn = (props) => {
    return ( 
        <div className='right-button'>
            <ArrowRight/>
        </div>
        
     );
}

export default rightBtn