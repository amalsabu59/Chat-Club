import React from 'react';
import { Button } from "@mui/material"
import "./Login.css" 
import { auth,provider } from "./firebase";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


function Login() {
const [{},dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) =>{
            dispatch({
               type: actionTypes.SET_USER,
                user: result.user,
                
           })
        }).catch((error)=>alert(error.message));    
        }
    
        return(
            <div className="login">
                <div className="login_container">
                    <img src="https://www.pngall.com/wp-content/uploads/2016/04/Chat-Free-Download-PNG.png" />
                    <div className="login_text">
                        <h1>Sign In To Chat Club</h1>
                    </div>
                    <Button onClick={signIn}>
                        Sign In 
                    </Button>
                </div>
    
            </div>
        )
}

export default Login;


