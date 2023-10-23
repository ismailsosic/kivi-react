import React, { useRef, useState } from 'react';
import validator from 'validator';
import './EmailField.css';

const EmailField = (props) => {
    
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value
    
        if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
        } else {
        setEmailError('Enter valid Email!')
        }
    }
    
    return (

        <div>
            <hr/>
            <div>
                <h2>Unesite VAS Email</h2>
               
                <input type='text' id='userid' onChange={(e) => validateEmail(e)}></input>

            </div>

        </div>

    );
    }
    
    
    
export default EmailField;