import React, { useEffect } from 'react'
import DisplayImage from './../images/tossed.png'
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { BsPeople } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import MenuData from './../data/menu dishes sample.json'
import { useSelector, useDispatch } from 'react-redux';
import { addMenu } from './../features/Menus'
import MenuItem from './MenuItem';
import Menubar from './Menubar';
import QRCode from "react-qr-code";
import { Element } from 'react-scroll';
import StickyBox from 'react-sticky-box';
import Cart from './Cart';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';


const useStyles = makeStyles({
    displayImage: {
        height: '350px',
        transition: "opacity .5s ease-out",
        backgroundPosition: "50%",
        backgroundSize: "cover"

    },
    container: {
        width: '100%',
        display: 'flex',
        padding: '40px 0px 40px 0px',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',

    },
    detailsBox: {
        '@media (max-width: 575px)': {
            padding: '10px',
        }
    },
    title: {
        fontWeight: '600',
        color: '#2e3333',
        fontFamily: " stratos,sans-serif",
        fontSize: "40px",
        lineHeight: "48px",
        '@media (max-width: 575px)': {
            fontSize: "28px",
            lineHeight: "35px",
        }
    },
    flexBox: {
        display: 'flex',
        alignItems: 'center',
    },
    starRating: {
        color: '#4d7c1b',
    },
    starRatingIcon: {
        padding: '10px 0px 5px 0px',
        color: '#4d7c1b',
        fontSize: 30,
        marginRight: '10px',
    },
    infoIcon: {
        fontSize: 30,
        color: '#9b9b9b',
        marginRight: '10px',
    },
    infoBox: {
        display: 'flex',
        alignItems: 'center',
        lineHeight: 0
    },
    arrowIcon: {
        color: "#00CCBC",
    },
    locationIcon: {
        fontSize: 30,
        color: '#4d7c1b',
        marginRight: '10px',
    },
    actionBox: {
        maxWidth: "200px",
        justifyContent: "flex-end",
        '@media (max-width: 1275px)': {
            display: 'none',
        }
    },
    actionBoxDelivery: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "15px",
    },
    detailsContainer: {
        width: "min-content",
    },
    discountBox: {
        marginTop: "16px",
        backgroundColor: "#F34848",
        padding: "16px",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "flex-start",
        color: "#fff",
        minWidth: "auto",

    },
    discountIcon: {
        rotate: "90deg",
        marginRight: "8px",
    },
    discountTxt: {
        fontSize: "17px",
        fontWeight: "600",
    },

    menuTitle: {
        fontWeight: '700',
        color: '#2e3333',
        fontFamily: " stratos,sans-serif",
        fontSize: "22px",
        lineHeight: "28px",
    },
    menuContainerBody: {


    },
    menuContainer: {
        marginInline: '30px',
        width: 'fit-content',
        display: 'block',
        paddingInline: '30px',
        '@media (max-width: 575px)': {
            padding: '0px',
            marginInline: "0px",
        }
        // flexWrap: 'wrap'
    },
    menuTitleContainer: {
        margin: '30px 0px 0px 0px',
        zIndex: -1,
    }
});

const theme = createTheme({
    typography: {
        title1: {
            fontWeight: '600',
            color: '#2e3333',
            fontFamily: " stratos,sans-serif",
            fontSize: "37px",
            lineHeight: "48px",
        },
        subtitle1: {
            padding: '16px 0px 5px 0px',
            color: "#2e3333",
            fontSize: "16px",
            lineHeight: "22px",
            fontWeight: "400",
            fontFamily: "plex-sans,sans-serif",
        },
        body: {
            paddingBottom: "5px",
            color: "#585c5c",
            fontSize: "14px",
            lineHeight: "19px",
            fontWeight: "400",
            fontFamily: "plex-sans,sans-serif",
        }
    },
});

const Home = () => {
    const classes = useStyles();
    const menuList = useSelector((state) => state.menus)
    const dispatch = useDispatch();

    useEffect(() => {
        for (let i = 0; i < MenuData.length; i++) {
            dispatch(addMenu(MenuData[i]))
        }
    }, []);
    useEffect(() => {
        if (menuList.value.length > 0) {
            console.log("menuList", menuList)
        }
    }, [menuList]);
    return (
        <div>

            <div className={classes.container}>
                <div >
                    <img src={DisplayImage} alt="Logo" className={classes.displayImage} />
                </div>

                <div className={classes.detailsBox}>
                    <ThemeProvider theme={theme}>
                        <Typography className={classes.title} variant="title">
                            Tossed - St Martin&apos;s Lane
                        </Typography>
                        <Typography variant="subtitle1">
                            Chicken ?? Salads ?? Healthy
                        </Typography>
                        <div className={classes.flexBox}>
                            <StarIcon className={classes.starRatingIcon} />
                            <Typography variant="subtitle1">
                                <span className={classes.starRating}>4.7 Excellent</span> (500+)??0.20 miles away??Closes at 21:00????1.99 delivery????7.00 minimum
                            </Typography>
                        </div>
                        <div className={classes.infoBox}>
                            <InfoOutlinedIcon className={classes.infoIcon} />
                            <div>
                                <Typography variant="subtitle1">
                                    Info
                                </Typography>
                                <Typography variant="body">
                                    Map, allergens and hygiene rating
                                </Typography>
                            </div>
                            <ArrowForwardIosIcon fontSize="10px" className={classes.arrowIcon} />
                        </div>
                        <div className={classes.infoBox}>
                            <PlaceOutlinedIcon className={classes.locationIcon} />
                            <div>
                                <Typography variant="subtitle1" >
                                    This place is close to you
                                </Typography>
                                <Typography variant="body">
                                    Local places are likely to give you the best experience.
                                </Typography>
                            </div>

                        </div>
                        <div className={classes.discountBox}><span className={classes.discountIcon}><LocalOfferOutlinedIcon /></span><span className={classes.discountTxt}>20% off entire menu-</span>For orders over ??35. T&Cs apply</div>

                    </ThemeProvider>
                </div>

                <div className={classes.actionBox}>
                    <div className={classes.actionBoxDelivery}>
                        <div style={{ display: "flex", alignItems: "center" }}> <span><TbTruckDelivery style={{ color: "#00b8a9", fontSize: "18px", marginRight: 5 }} /></span>Delivery</div>
                        <div style={{ color: "#00b8a9" }}>change</div>
                    </div>
                    <Button style={{ color: "#585c5c", textTransform: "none", padding: "7px 14px 7px 14px", background: "none", fontSize: "15px", fontWeight: "400", fontFamily: "plex-sans,sans-serif", border: "1px solid #a3afaf", }} startIcon={<BsPeople style={{ color: "#00b8a9", fontSize: "18px" }} />}>Start group order</Button>

                    <div style={{ background: 'white', padding: '16px', }}>
                        <QRCode value={window.location.href} size={150} />
                    </div>
                </div>

            </div>
            <StickyBox>
                <Menubar />
            </StickyBox>

            <div className={classes.menuContainer}>
                <Box sx={
                    {
                        display: 'grid',
                        gridGap: '32px 24px',
                        gridTemplateColumns: '60% 1fr',
                        gridTemplateRows: 'auto 1fr',
                        '@media only screen and (min-width: 960px)': {
                            gridTemplateColumns: 'minmax(50%,60%) minmax(420px,1fr)',
                        },
                        '@media (max-width: 860px)': {
                            gridTemplateColumns: '1fr',
                        }
                    }
                }>
                    <div>
                        {menuList.value.length > 0 && menuList.value.map((menu, i) =>
                            <Element
                                name={menu.id.toString()}
                                className={menu.id}
                                key={"display" + menu.id}
                            >
                                <br />
                                <div key={i}>
                                    <div className={classes.menuTitleContainer}>
                                        <div className={classes.menuTitle} >
                                            {menu.title}
                                        </div>
                                    </div>
                                    <Grid container spacing={2}>
                                        {menu.data.map((item, i) =>
                                            <Grid item key={i} sx={12} lg={6} xs={12} md={12} xl={6} >
                                                <MenuItem name={item.dishName} desc={item.description} price={item.displayPricing} image={item.imageUrl} />
                                            </Grid>
                                        )}
                                    </Grid>

                                </div>
                            </Element>
                        )
                        }
                    </div>
                    <div className={classes.cartBox}>
                        <StickyBox style={{ paddingInline: "50px", paddingTop: 100 }}>
                            <Cart />
                        </StickyBox>
                    </div>
                </Box>
            </div>

        </div>
    )
}

export default Home

