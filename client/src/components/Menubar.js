import React ,{useEffect}from 'react'
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles({
    menuBarContainer:{
        alignSelf:'center',
        display:'flex',
        flexDirection:'row',
        padding:'10px 20px 10px 20px',
        justifyContent:'space-around',
        alignItems:'center',
        overflow:"hidden",
        height:'50px',
        color:'#00CCBC',
        borderTop:'1px solid rgb(0 0 0 / 5%)',
        boxShadow:'0 2px 4px rgb(0 0 0 / 5%)',
    },
    menuItemContainer:{
        width:"100px",
        padding:"4px",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        "&:hover":{
            backgroundColor:'#00CCBC',
            color:'#fff',
            borderRadius:'35px',
        }
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
        {menuList.value.length > 0 && menuList.value.map((menu,i) =>

            <div key={i}>
                <div className={classes.menuItemContainer}>
                    <Typography className={classes.menuTitle} variant="title">
                        {menu.title.substring(0, 12)}
                    </Typography>
                </div>
            </div>
            )
            }
    </div>
)
}

export default Menubar