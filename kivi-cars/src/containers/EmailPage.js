import { useState, useEffect} from 'react';
import './css/EmailPage.css'
import Header from '../components/Header/Header';
import ButtonsToolbar from '../components/ButtonsToolbar/ButtonsToolbar';
import StandardBtn from '../components/Button/StandardBtn';
import TitleBtn from '../components/Button/TitleBtn';
import { Link } from 'react-router-dom';


function EmailPage(props) {

    const {data, setData} = props.data
    const [error, setError] = useState(false)


    const [state, setState] = useState({
        email: "",
        confirmEmail: ""
    })

    const header = "SLANJE OBAVJEŠTENJA";
    let title1 = 'Odmah';
    let title2 = 'Dnevno';
    let title3 = 'ZAVRŠI';
    let errmsg = 'Email does not match!';
    let filter = 'Slanje'


    const emailCheck = (e, ec) => {
        if(e !== "" && e === ec){
            setError(false)
            setData(prevData => ({
                ...prevData,
                "Email": state.email
            }))
            return error
        }else {
            setError(true)
            return error
        }
    }

    const updateInput = (event) => {
        setState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    useEffect(() => {
        emailCheck(state.email, state.confirmEmail)
    }, [state])

    return ( 
        <div>
            <Header header={header}/>
            <ButtonsToolbar routes={props.routes}/>
            <div className="info">
                <h2 className='h2'>Slanje obavještenja</h2>
            </div>
            <div className='buttons-container'>
                <StandardBtn data={{data, setData, filter}} title={title1}/>
                <StandardBtn data={{data, setData, filter}} title={title2}/>
            </div>
            <div className='form'>
                <form method="POST" id="form-email">
                    <div className='email-div'>
                        <input type="email" id="email" name='email' placeholder='vas.email@mail.com' required size='250' onChange={updateInput} />
                        <input type="email" id="confirmEmail" name='confirmEmail' placeholder='potvrdite.email@mail.com' required size='250' onChange={updateInput} />
                        <p style={{color: "red"}} >{error ? errmsg : null}</p>
                    </div>

                </form>
            </div>
            <div>
                <h3 className='h3-2'>*U svakom trenutku možete prekinuti slanje objava kroz
                    link u vašem emailu
                </h3>
            </div>
            <div>
                {error ? (<TitleBtn title={title3} /> ) : (
                <Link to="/congrats">
                    <TitleBtn title={title3} />    
                </Link>
                )}      
            </div>
        </div>
        

        


     );
}

export default EmailPage;