
import './App.css';
import { Home } from './components/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drawer from './components/Drawer';
import {makeStyles} from '@mui/styles'
import About from './pages/About'
import AdvisoryComittee from './pages/AdvisoryComittee';
import Notifications from './pages/Notifications';
import { Grid } from '@mui/material';
import { DrawerContext } from './contexts/DrawerContext';
import { useState,useContext } from 'react';
import Add from './components/Add';
import Login from './pages/Login';


const useStyles = makeStyles({
  container:{
    
   
    
  }
})
function App() {
  const [status,setStatus] = useState(false);
  const classes = useStyles();
  return (
    <div >
    
      <BrowserRouter>
      <DrawerContext.Provider value={{status,setStatus}}>
      <Navbar />
      
      <Grid container>
        <Grid item sm={2}><Drawer/></Grid>
        <Grid item sm={10}>
      </Grid>
      
      <Routes>

      
        
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/about" element={ <About/>}></Route>
        <Route path="/login" element={ <Login/>}></Route>
        <Route path="/advisory" element={ <AdvisoryComittee/>}></Route>
        <Route path="/notifications" element={ <Notifications/>}></Route>
          </Routes>
          
          </Grid>
          
          </DrawerContext.Provider>
      </BrowserRouter>
     
      <Add/>
      </div>
    
  );
}

export default App;
