import React from 'react'
import { makeStyles } from '@mui/styles'
import Post from './Post';
import { Grid, Typography } from '@mui/material';

const useStyles = makeStyles(
  {

    
  }
)



export const Home = () => {

  const classes = useStyles();

  return (
    <div >
      <Grid container>
        <Grid item  sx={12} md={12} lg={12}>
          <Typography variant='h4' align='center'>Posts</Typography>
    
        </Grid>
        <Grid item sx={4} md={4} lg={4}>
          <Post/>
        </Grid>
        <Grid item sx={4} md={4} lg={4}>
          <Post/>
        </Grid>
        <Grid item sx={4} md={4} lg={4}>
          <Post/>
        </Grid>
        <Grid item sx={4} md={4} lg={4}>
          <Post/>
        </Grid>
        <Grid item sx={4} md={4} lg={4}>
          <Post/>
        </Grid>
        <Grid item sx={4} md={4} lg={4}>
          <Post/>
        </Grid>

        

      </Grid>

    </div>
  )
}
