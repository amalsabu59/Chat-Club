import React from 'react';
import { Button } from "@mui/material"
import "./Login.css"

function Login() {
    const signIn = () => {

    }
    
        return(
            <div className="login">
                <div className="login_container">
                    <img src="https://www.pngall.com/wp-content/uploads/2016/04/Chat-Free-Download-PNG.png" />
                    <div className="login_text">
                        <h1>Sign In To Chat Club</h1>
                    </div>
                    <Button onClick={signIn}>
                        Sign In to ClubChat
                    </Button>
                </div>
    
            </div>
        )
}

export default Login;


