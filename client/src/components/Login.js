import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { FcGoogle } from 'react-icons/fc';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
import api from '../api';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser } from './../features/Users'

const useStyles = makeStyles({
    loginContainer: {
        maxWidth: "400px",
        margin: "0 auto",
        padding: "64px 16px",
    },
    titleLog: {
        color: "#3d3d3d",
        fontSize: "21.5px",
    },
    loginContainerLine: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
        color: "#585c5c",
    },
    loginHR: {
        width: "170px",
        height: "1px",
        backgroundColor: "#d1d1d1",
    },
    termsAndConditions: {
        fontSize: "14.2px",
        color: "#585c5c",
        WebkitFontSmoothing: "subpixel-antialiased",
        WebkitTextSizeAdjust: "100%",
    },
    linkTxt: {
        color: "#00ccbc",
    }
});

const FacebookButton = styled(Button)(() => ({
    transitionProperty: "box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease-in-out",
    borderRadius: "4px",
    height: "48px",
    width: "100%",
    fontSize: "15px",
    fontWeight: "bold",
    background: "#4c69ba",
    border: "none",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "plex-sans, sans-serif",
    outline: "none",
    cursor: "pointer",
    textTransform: "none",
    elevation: "0",
    marginBottom: "16px",
    '&:hover': {
        backgroundColor: "#4c69ba",
    },

}));

const GoogleButton = styled(Button)(() => ({
    transitionProperty: "box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease-in-out",
    borderRadius: "4px",
    height: "48px",
    width: "100%",
    fontSize: "15px",
    fontWeight: "600",
    background: "none",
    border: "1px solid #a3afaf",
    color: "#2e3333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    outline: "none",
    cursor: "pointer",
    WebkitFontSmoothing: "antialiased",
    textDecoration: "none",
    webkitAppearance: "none",
    mozAppearance: "none",
    appearance: "none",
    fontFamily: "plex-sans, sans-serif",
    minHeight: "48px",
    padding: " 12px 24px",
    textTransform: "none",
    elevation: "0",
    marginBottom: "16px",
    '&:hover': {
        background: "none",
    },

}));


const ContinueEmailButton = styled(Button)(() => ({
    transitionProperty: "box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease-in-out",
    borderRadius: "4px",
    height: "48px",
    width: "100%",
    fontSize: "15px",
    fontWeight: "bold",
    background: "#00ccbc",
    border: "none",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "plex-sans, sans-serif",
    outline: "none",
    cursor: "pointer",
    textTransform: "none",
    elevation: "0",
    marginBottom: "16px",
    '&:hover': {
        background: "#00ccbc",
    },

}));



const Login = () => {
    const classes = useStyles();
    const clientId = "380810221970-6p2h323ibdoknuaddgrb432skkdm157o.apps.googleusercontent.com"
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }
        gapi.load('client:auth2', start)
    }, []);


    const responseFacebook = (response) => {
        console.log("FB", response);
    }


    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS!", res.profileObj)
        if (res.profileObj) {
            const userDetails = {
                username: res.profileObj.name,
                email: res.profileObj.email,
                password: res.profileObj.googleId
            }
            api.post('/user/getuser', userDetails)
                .then(function (response) {
                    console.log(response)
                    if (response.data.length === 0) {
                        api.post('/user/addUser', userDetails)
                            .then(function (response) {
                                console.log(response)
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    } else {
                        dispatch(addUser(response.data))
                        navigate('/')
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED!", res)
    }

    return (
        <div>
            <div className={classes.loginContainer}>
                <h2 className={classes.titleLog}>Sign Up or Login</h2>
                <FacebookLogin
                    appId="728817248189489"
                    callback={responseFacebook}
                    fields="name,email,picture"
                    render={renderProps => (
                        <FacebookButton onClick={renderProps.onClick} variant="contained" startIcon={<FacebookRoundedIcon />}>Continue With Facebook</FacebookButton>
                    )}
                />

                <GoogleLogin
                    clientId={clientId}
                    render={renderProps => (
                        <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained" startIcon={<FcGoogle />}>Continue With Google</GoogleButton>
                    )}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                // isSignedIn={true}
                />

                <div className={classes.loginContainerLine}><div className={classes.loginHR}></div> <span>or</span> <div className={classes.loginHR}></div></div>
                <ContinueEmailButton variant="contained" onClick={() => navigate('/register')} startIcon={<MailOutlineSharpIcon />}>Continue With Email</ContinueEmailButton>
                <p className={classes.termsAndConditions}>By continuing you agree to our  <a href="google.com" target="_blank" className={classes.linkTxt}>T&Cs</a>. Please also check out our <a href="google.com" target="_blank" className={classes.linkTxt}>Privacy Policy</a>. We use your data to offer you a personalised experience and to better understand and improve our services. <a href="google.com" target="_blank" className={classes.linkTxt}>For more information see here</a>.</p>
            </div>
        </div>
    )
}

export default Login