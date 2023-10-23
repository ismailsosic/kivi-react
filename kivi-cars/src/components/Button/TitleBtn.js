import './button.css'

const StandardBtn = (props) => {

    return (
        <div className='standard-btn'>

           <button value={props.title} className='standardBtn'>{props.title}</button>
        </div>
    )
}

export default StandardBtn