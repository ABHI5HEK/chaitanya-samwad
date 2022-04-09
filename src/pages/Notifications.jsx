import React from 'react'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    container:{
      display:"flex"
     
      
    }
  })

const Notifications = () => {

    const classes = useStyles();
  return (
    <div className={classes.container}>Notifications</div>
  )
}

export default Notifications