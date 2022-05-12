import React from 'react'
import { useEffect,useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Button, Container, Grid, MenuItem, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'

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
const currencies = [
    {
      value: 'User',
      label: 'User'
     
    },
    {
      value: 'Author',
      label: 'Author'
    },
    {
      value: 'Reviewer',
      label: 'Reviewer'
    },
    
  ];

const Register = () => {
    let navigate = useNavigate();
    const [role, setRole] = useState('');
    const [regData,setRegData] = useState({
        fname: "",lname:"",email:"",password:"",cpassword:"",mobile:"",role:""
    });

let name,value; 
    const changeHandler = (e) =>{
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setRegData({...regData,[name]:value})

        //console.log(regData);

    }

    useEffect(()=>{
        
    },[])
    const classes = useStyles();
    

      const handleChange = (event) => {
        
        setRole(event.target.value);
        
        name = 'role';
        value = event.target.value;
        setRegData({...regData,[name]:value})

        console.log(regData);
      };
    
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
            
            width:'40%' ,
            height: '80%',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            alignSelf:'center',
            justifyContent:'center',
            backgroundColor: 'white',
            
            borderRadius:'10px',
            boxShadow:'5px 5px 40px #2196f3',
           
           
            padding:'10px',
            margin:'5px'
          }}>
              <Stack spacing={2}>
              <Typography variant='h4' align='center'>Register</Typography>
                
              <Stack spacing={2} direction='row'>
                  <TextField name = "fname" value = {regData.fname} onChange={changeHandler} id="outlined-basic" label="First Name" variant="outlined" size='small' />
                  <TextField name = "lname" value = {regData.lname} onChange={changeHandler} id="outlined-basic" label="Last Name" variant="outlined" size='small' />
                  </Stack> 
                  <TextField name = "email" value = {regData.email} onChange={changeHandler} id="outlined-basic" label="Email" variant="outlined" size='small' />
                  <Stack spacing={2} direction='row'>
                  <TextField name = "password" value = {regData.password} onChange={changeHandler} id="outlined-basic" label="Password" variant="outlined" type='password'
                 size='small'
                />
                  <TextField name = "cpassword" value = {regData.cpassword} onChange={changeHandler} id="outlined-basic" label="Confirm Password" variant="outlined" type='password'
                 size='small'
                />
                  </Stack> 
                  <Stack spacing={2} direction='row'>
                <TextField name = "mobile" value = {regData.mobile} onChange={changeHandler} id="outlined-basic" label="Phone" variant="outlined" type='mobile'
                size='small'
                />
                <TextField 
          id="outlined-select-role"
          select
          label="Select"
          value={role}
          onChange={handleChange}
          helperText="Please select your role"
          size='small'
        >
          {currencies.map((option) => (
            <MenuItem  onClick={()=>handleChange} key={option.value} value={option.value}>
             {option.label}
            </MenuItem>
          ))}
        </TextField>
                </Stack> 
                <Button variant="contained" color='success'>Register</Button>
                <Typography variant='subtitle' align='center' fontWeight={100}>Already have an account</Typography>
                <Button variant="contained" color='primary'  onClick={()=>navigate('/login', { replace: true })} >Login</Button>
    
              </Stack>
            </Box>
       </Container>
  )
}

export default Register