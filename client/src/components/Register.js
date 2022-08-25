import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import api from '../api';
import { addUser } from './../features/Users'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

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
    },

    label: {
        fontSize: '18px',
        lineHeight: '22px',
        fontWeight: 400,
    },
    input: {

        flex: 1,
        height: '48px',
        boxSizing: 'border-box',
        fontSize: '16px',
        lineHeight: '24px',
        padding: '12px 16px',
        border: '1px solid #e8ebeb',
        borderRadius: '4px',
        boxShadow: 'inset 0 2px 4px rgb(0 0 0 / 5 %)',
        width: '400px',
        margin: '15px 0'
    }
});

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

const ForgetPasswordButton = styled(Button)(() => ({
    borderRadius: "4px",
    height: "48px",
    width: "100%",
    fontSize: "15px",
    fontWeight: 'normal',
    border: "none",
    background: "#fff",
    color: "#00ccbc",
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
        border: "solid 1px black",
        background: "#fff",
    },

}));

const Register = () => {
    const classes = useStyles();
    const [toggleRegister, setToggleRegister] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "" })
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    const emailCheck = () => {
        setToggle(true)
        if (userDetails) {
            api.post('/user/getuser', userDetails)
                .then(function (response) {
                    console.log(response)
                    if (response.data.length !== 0) {
                        console.log("user already exists")
                        setToggleRegister(true);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    const userLogin = () => {
        api.post('/user/validate', userDetails)
            .then(function (response) {
                console.log(response)
                dispatch(addUser(response.data))
                navigate('/')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const userRegister = () => {
        api.post('/user/addUser', userDetails)
            .then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <div className={classes.loginContainer}>
                <h2 className={classes.titleLog}>Sign Up or Login</h2>
                {!toggle ?
                    <>
                        <div className={classes.label}>
                            Email Address
                        </div>
                        <input placeholder='e.g. name@example.com' className={classes.input} type="email" name="email" onChange={handleChange} />

                        <ContinueEmailButton variant="contained" onClick={() => emailCheck()} >Continue </ContinueEmailButton>
                    </>
                    :
                    <>
                        {!toggleRegister ?
                            <div>
                                <div className={classes.label}>
                                    Name
                                </div>
                                <input placeholder='John Walker' className={classes.input} type="text" name="username" onChange={handleChange} />


                                <div className={classes.label}>
                                    Password
                                </div>
                                <input className={classes.input} type="password" name="password" onChange={handleChange} />
                                <ContinueEmailButton variant="contained" onClick={() => userRegister()}>Register </ContinueEmailButton>
                            </div>
                            :
                            <div>
                                <div className={classes.label}>
                                    Password
                                </div>
                                <input className={classes.input} type="password" name="password" onChange={handleChange} />
                                <ContinueEmailButton variant="contained" onClick={() => userLogin()}>Login </ContinueEmailButton>
                            </div>
                        }
                    </>
                }
                <ForgetPasswordButton variant="contained" >Forget Password?</ForgetPasswordButton>
            </div>
        </div>
    )
}

export default Register