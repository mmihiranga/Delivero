
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    itemImage: {
        height: '100px',
        width: '100px',
        transition: "opacity .5s ease-out",
        objectFit: "cover"

    },
    card:{
        flex:'50%',
        width: '100%',
        minHeight: "160px",
        overflow:'hidden',
        backgroundColor: "#808080"
        // margin: '10px'
    }
});
const MenuItem = ({ name, desc, price, image }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea sx={{ display: 'flex', backgroundColor: "#808080", margin:'10px', height:'160px' }}>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary">
                       {price} 
                    </Typography>
                </CardContent>
                <div>
                    <img src={image ? image : "https://firebasestorage.googleapis.com/v0/b/eat-me-global-pte-ltd.appspot.com/o/1641971925020_Chicken%20%26%20Corn%20Soup%2Fchicken.sweet.corn.soup.jpg?alt=media&token=df8b581d-1087-438c-ac8f-eb44dad4ac62"} alt="img" className={classes.itemImage} />
                </div>
            </CardActionArea>
        </Card>
    )
}

export default MenuItem