import React from 'react'
import { makeStyles } from '@mui/styles'
import logo from '../assets/pdf.png'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

const useStyles = makeStyles({
    postcontainer:{
        margin: '20px',

    },
    media:{
        height: "250px",
        
    }

})
const Post = () => {
    const classes = useStyles();
  return (
    <div className={classes.postcontainer}>
        <Card>
            <CardActionArea>
                <CardMedia className={classes.media} image={logo} title="My Post">
                    {/* https://images.pexels.com/photos/11490758/pexels-photo-11490758.jpeg?cs=srgb&dl=pexels-maria-ovchinnikova-11490758.jpg&fm=jpg */}

                </CardMedia>
                <CardContent>
                    <Typography variant='h5'>My First Post</Typography>
                    <Typography variant='body'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, perspiciatis laborum praesentium reprehenderit labore debitis cupiditate. Maxime molestiae ex blanditiis qui rerum quidem ab voluptatibus vero consectetur rem. Possimus, modi.</Typography>
                </CardContent>
                <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
            </CardActionArea>
        </Card>
    </div>
  )
}

export default Post