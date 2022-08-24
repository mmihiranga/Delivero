import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from './../images/Deliveroo-logo.png'
import HouseIcon from '@mui/icons-material/House';
import { Navigate, useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F5F5F5",
    // '&:hover': {
    //     backgroundColor: alpha(theme.palette.common.white, 0.25),
    // },
    marginLeft: 0,
    width: '100%',
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
        width: '100%',
        color: '#9ea0a0',
        [theme.breakpoints.up('sm')]: {
            width: '48ch',
            '&:focus': {
                width: '54ch',
            },
        },
    },
}));

const NavBar = () => {
    let navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ background: 'white' }} position="static">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src={Logo} alt="Logo" style={{ height: '72px' }} />
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
                        <div style={{ border: '1px solid rgba(158, 160, 160, 1)', paddingLeft: '8px', paddingRight: '8px', borderRadius: "2px" }} >
                            <Button
                                size="large"
                                edge="start"
                                aria-label="open drawer"
                                sx={{
                                    color: "#00CCBC",
                                }}
                                onClick={()=> {return navigate('/login')}}
                            >
                                <HouseIcon />
                                <Typography style={{ color: 'black' }} variant="subtitle1">Sign up or log in</Typography>

                            </Button>
                        </div>
                        <div style={{ border: '1px solid rgba(158, 160, 160, 1)', marginLeft: '8px', paddingLeft: '8px', paddingRight: '8px',borderRadius: "2px" }} >
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