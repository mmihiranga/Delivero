import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { Link } from "react-scroll";
import Tabs from '@mui/material/Tabs';

const useStyles = makeStyles({
    menuBarContainer: {


        justifyContent: 'space-around',
        padding: '10px 20px 10px 20px',
        overflow: "hidden",
        height: '50px',
        color: '#00CCBC',
        borderTop: '1px solid rgb(0 0 0 / 5%)',
        boxShadow: '0 2px 4px rgb(0 0 0 / 5%)',
        zIndex: 10,
        backgroundColor: '#fff',

    },
    menuItemContainer: {
        cursor:'pointer',
        width: 'max-content',
        padding: "4px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "&:hover": {
            backgroundColor: '#00CCBC',
            color: '#fff',
            borderRadius: '35px',

        },

    },
    activeLink: {
        padding: "4px",
        backgroundColor: '#00CCBC',
        color: '#fff',
        borderRadius: '35px',
    }
})

const Menubar = () => {
    const classes = useStyles();
    const menuList = useSelector((state) => state.menus)


    useEffect(() => {
        console.log(menuList)
    }, []);

    return (
        <div className={classes.menuBarContainer}>
            <Tabs
                value={5}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
                TabIndicatorProps={{
                    style: {
                        display: 'none',
                    }
                }}

            >
                {menuList.value.length > 0 && menuList.value.map((menu, i) =>

                    <div key={i}>
                        <div className={classes.menuItemContainer}>
                            <Typography className={classes.menuTitle} variant="title">
                                <Link
                                    activeClass={classes.activeLink}
                                    className={menu.id}
                                    to={menu.id.toString()}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-50}
                                    onSetActive={() => this.scrollToCategory(menu.id)}
                                >
                                    {menu.title.substring(0, 12)}
                                    {/* {menu.id} */}
                                </Link>
                            </Typography>

                        </div>
                    </div>
                )
                }
            </Tabs>
        </div>
    )
}

export default Menubar