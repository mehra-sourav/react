import React from "react";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (resp,callBack) => {
    // console.log("In GsignIn.jsx");
    callBack(true);
    return true;
}

const GoogleSignIn = props => {
    const { userloggedIn } = props;
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <GoogleLogin
              clientId="240686188076-bf0vtq65pcjhi45k1du5vchjbkfpjsk2.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={resp => responseGoogle(resp,userloggedIn)}
              onFailure={resp => responseGoogle(resp,userloggedIn)}
              cookiePolicy={"single_host_origin"}
            />
        </div>
    );
};

export default GoogleSignIn;