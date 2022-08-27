import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from './../images/Deliveroo-logo.png'
import HouseIcon from '@mui/icons-material/House';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F5F5F5",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9ea0a0',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        color: '#9ea0a0',
        [theme.breakpoints.up('lg')]: {
            width: '38ch',
            '&:focus': {
                width: '44ch',
            },
        },
        [theme.breakpoints.up('md')]: {
            width: '30ch',
            '&:focus': {
                width: '38ch',
            },
        },
        [theme.breakpoints.down('md')]: {
            width: '28ch',
        },
        [theme.breakpoints.down('sm')]: {
            width: '0ch',
        },
    },
}));

// const SearchBar = styled(Search)(({ theme }) => ({
//     width: '50px',
//     [theme.breakpoints.up('lg')]: {
//         width: 'auto',
//     },
// }));


const SignLoginBtn = styled('div')(({ theme }) => ({
    border: '1px solid rgba(158, 160, 160, 1)',
    paddingLeft: '8px',
    paddingRight: '8px',
    borderRadius: "2px",
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));



const useStyles = makeStyles({
    avatar: {
        display: 'flex'
    },

    userName: {
        fontWeight: '600',
        color: '#2e3333',
        fontFamily: " stratos,sans-serif",
        fontSize: "17px",
        lineHeight: "48px",
        marginLeft: "8px"
    },
});

const NavBar = () => {
    let navigate = useNavigate();
    const user = useSelector((state) => state.user)
    const [userDetails, setUserDetails] = useState()
    const classes = useStyles();

    useEffect(() => {
        if (user.value.length > 0) {
            console.log("user.value.", user.value)
            setUserDetails(user.value[0])
        }
    }, [user]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ background: 'white' }} position="static">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img onClick={() => navigate('/')} src={Logo} alt="Logo" style={{ height: '72px' }} />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search Tossed - St Martin's Lane"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <div style={{ display: 'flex' }}>
                        {userDetails ?
                            <div className={classes.avatar}>
                                <Avatar
                                    alt={userDetails.username}
                                    src="/static/images/avatar/1.jpg"
                                    sx={{ width: 45, height: 45 }}
                                />
                                <div className={classes.userName}>{userDetails.username}</div>
                            </div>

                            :

                            <SignLoginBtn>
                                <Button
                                    size="large"
                                    edge="start"
                                    aria-label="open drawer"
                                    sx={{
                                        color: "#00CCBC",
                                        
                                    }}
                                    onClick={() => { return navigate('/login') }}
                                >
                                    <HouseIcon />
                                    <Typography style={{ color: 'black' }} variant="subtitle1">Sign up or log in</Typography>

                                </Button>
                            </SignLoginBtn>}
                        <div style={{ border: '1px solid rgba(158, 160, 160, 1)', marginLeft: '8px', paddingLeft: '8px', paddingRight: '8px', borderRadius: "2px" }} >
                            <Button
                                size="large"
                                edge="start"
                                aria-label="open drawer"
                                sx={{
                                    color: "#00CCBC",
                                }}
                            >
                                <MenuIcon />
                                <Typography style={{ color: 'black' }} variant="subtitle1">Menu</Typography>
                            </Button>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar