import React from 'react'
import { makeStyles } from '@mui/styles'
import { Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

const useStyles = makeStyles({
    container:{
        height: '100vh',
        width:'100%' ,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'

    }
})

const Login = () => {
    const classes = useStyles();
  return (
   <Container sx={{
    height: '100vh',
    width:'100%' ,
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    padding:'10px'
    
   }}>
        <Box component="form"
      sx={{
        
        width:'60%' ,
        height: '80%',
        alignSelf:'center',
        backgroundColor: 'white',
        border:'2px solid grey',
        borderRadius:'10px',
        boxShadow:'5px 5px 10px #808080',
       
        '&:hover': {
          
          
          opacity: [0.9, 0.8, 0.7],
        },
        padding:'10px',
        margin:'10px'
      }}>
          <Typography variant='h4' align='center'>Login</Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        </Box>
   </Container>
  )
}

export default Login