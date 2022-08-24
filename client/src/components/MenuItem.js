
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles({
    itemImage: {
        height: '100px',
        width: '100px',
        transition: "opacity .5s ease-out",
        objectFit: "cover"

    },
    card:{
        // flex:'50%',
        // width: '100%',
        // minHeight: "160px",
        // overflow:'hidden',
        // backgroundColor: "#f5f5f8",
        // margin: '10px'
    },
    CardDetailsContent:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"flex-start",
        flexDirection:"column",
        width:"60%",
        height:"80%",
        overflow:"hidden",
    }
});



const theme = createTheme({
    typography: {
        title1: {
            fontWeight: '600',
            color: '#2e3333',
            fontFamily: " stratos,sans-serif",
            fontSize: "15px",
            width:"100%",
            height:"16px",
            overflow:"hidden",

        },
        body1: {
            color: "#585c5c",
            fontSize: "13px",
            fontWeight: "400",
            fontFamily: "plex-sans,sans-serif",
            width:"100%",
            height:"40px",
            textOverflow:"ellipsis",
            overflow:"hidden",
        },
        price1: {
            color: "#585c5c",
            fontSize: "16px",
            fontWeight: "400",
            fontFamily: "plex-sans,sans-serif",
            width:"100%",
        },
    },
});


const MenuItem = ({ name, desc, price, image }) => {

    const classes = useStyles();

    return (
       
            <CardActionArea 
                sx={{ 
                        display: 'flex', 
                        flexWrap:'wrap',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        backgroundColor: "#f5f5f8",
                        margin:'10px', 
                        height:'140px',
                        width:'40%',
                        elevation:4,
                        borderRadius: '5px',
                        overflow:'hidden',
                        "&:hover": {
                            backgroundColor: "#f5f5f8",
                            elevation:8,
                        }
                        }}>
                
                <CardContent className={classes.CardDetailsContent}>
                    <ThemeProvider theme={theme}>
                    <Typography gutterBottom variant="title1" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {desc}
                    </Typography>

                    <Typography variant="price1" color="text.secondary">
                        £{price} 
                    </Typography>
                    </ThemeProvider>
                </CardContent>
                <div>
                    <img src={image ? image : "https://firebasestorage.googleapis.com/v0/b/eat-me-global-pte-ltd.appspot.com/o/1641971925020_Chicken%20%26%20Corn%20Soup%2Fchicken.sweet.corn.soup.jpg?alt=media&token=df8b581d-1087-438c-ac8f-eb44dad4ac62"} alt="img" className={classes.itemImage} />
                </div>
            </CardActionArea>
       
    )
}

export default MenuItem