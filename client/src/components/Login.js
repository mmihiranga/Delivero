import React from 'react'
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { FcGoogle } from 'react-icons/fc';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';


const useStyles = makeStyles ({
    loginContainer: {
        maxWidth: "400px",
        margin: "0 auto",
        padding: "64px 16px",
    },
    titleLog:{
        color: "#3d3d3d",
        fontSize: "21.5px",
    },
    loginContainerLine:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
        color: "#585c5c",
    },
    loginHR:{
        width: "170px",
        height: "1px",
        backgroundColor: "#d1d1d1",
    },
    termsAndConditions:{
        fontSize: "14.2px",
        color: "#585c5c",
        WebkitFontSmoothing:"subpixel-antialiased",
        WebkitTextSizeAdjust:"100%",
    },
    linkTxt:{
        color: "#00ccbc",
    }
});

const FacebookButton = styled(Button)(({ theme }) => ({
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
    fontFamily:"plex-sans, sans-serif",
    outline: "none",
    cursor: "pointer",
    textTransform: "none",
    elevation: "0",
    marginBottom: "16px",
    '&:hover': {
        backgroundColor: "#4c69ba",
    },

  }));

  const GoogleButton = styled(Button)(({ theme }) => ({
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
    fontFamily:"plex-sans, sans-serif",
    minHeight: "48px",
    padding:" 12px 24px",
    textTransform: "none",
    elevation: "0",
    marginBottom: "16px",
    '&:hover': {
        background: "none",
    },
    
  }));


  const ContinueEmailButton = styled(Button)(({ theme }) => ({
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
    fontFamily:"plex-sans, sans-serif",
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
    return (
        <div>
            <div className={classes.loginContainer}>
                <h2 className={classes.titleLog}>Sign Up or Login</h2>
                <FacebookButton variant="contained" startIcon={<FacebookRoundedIcon />}>Continue With Facebook</FacebookButton>
                <GoogleButton variant="contained" startIcon={<FcGoogle />}>Continue With Google</GoogleButton>
                <div  className={classes.loginContainerLine}><div  className={classes.loginHR}></div> <span>or</span> <div  className={classes.loginHR}></div></div>
                <ContinueEmailButton variant="contained" startIcon={<MailOutlineSharpIcon />}>Continue With Email</ContinueEmailButton>
                <p className={classes.termsAndConditions}>By continuing you agree to our  <a href="google.com" target="_blank" className={classes.linkTxt}>T&Cs</a>. Please also check out our <a href="google.com" target="_blank" className={classes.linkTxt}>Privacy Policy</a>. We use your data to offer you a personalised experience and to better understand and improve our services. <a href="google.com" target="_blank" className={classes.linkTxt}>For more information see here</a>.</p>
            </div>
        </div>
    )
}

export default Login