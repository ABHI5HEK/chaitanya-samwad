import React, { useContext, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext'

const useStyles = makeStyles({
    container:{
        height: '100vh',
        width:'100%' ,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'

    },
    textfields:{
      width: '80%',
      alignSelf:'center',
      marginTop:'20px'

    },textHead:{
      width: '80%',
      alignSelf:'center'
    }
})

const Login = () => {
  const {login,setLogin} = useContext(LoginContext);
    const classes = useStyles();
    let navigate = useNavigate();
    const [loginData,setLoginData] = useState({email:"",password:""});
    let name,value
    const changeHandler = (e)=>{
      console.log();
      name = e.target.name;
      value = e.target.value;
      console.log(e.target.value);
      setLoginData({...loginData,[name]:value})

    }
    const submitLogin = ()=>{
      setLogin(true);
     navigate('/');
      
    }
    
  return (
   <Container sx={{
    height: '90vh',
    width:'100%' ,
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    padding:'10px'
    
   }}>
        <Box component="form"
      sx={{
        
        width:'30%' ,
        height: '60%',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor: 'white',
        
        borderRadius:'10px',
        boxShadow:'5px 5px 40px #2196f3',
       
        
        padding:'10px',
        margin:'10px'
      }}>
          <Stack spacing={2}>
          <Typography variant='h4' align='center'>Login</Typography>
            
              
            <TextField id="outlined-basic" label="Email" variant="outlined" size='small' name="email" value={loginData.email} onChange={changeHandler}/>
            <TextField id="outlined-basic" label="Password" variant="outlined" type='password' name="password" value={loginData.password}
            helperText='Do not share password with any one' size='small' onChange={changeHandler}
            />
            <Button variant="contained" color='success' onClick={submitLogin}>Submit</Button>
            <Typography variant='subtitle' align='center' fontWeight={100}>Don't have an account</Typography>
            <Button variant="contained" color='primary' onClick={()=> navigate('/register', { replace: true })}>Register</Button>

          </Stack>
        </Box>
   </Container>
  )
}

export default Login