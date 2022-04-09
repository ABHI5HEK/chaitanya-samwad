
import { Drawer as MUIDrawer,ListItem,ListItemIcon,List,ListItemText, Container } from '@mui/material'
import {makeStyles} from '@mui/styles'
import { SidebarData } from '../assets/sidebardata'
import React, { useState,useEffect,useContext } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";
import { DrawerContext } from '../contexts/DrawerContext';
import { GiHamburgerMenu } from 'react-icons/gi';

const useStyles = makeStyles(
  {

    drawer:{
      
    }
  
  
  }
)




const Drawer = () => {

  const clickHandler = (item)=>{
    navigate(item.path)
    setStatus(!status)
  }

  const {status,setStatus} = useContext(DrawerContext);
       
        const classes = useStyles();
        let navigate = useNavigate();
          return (
      
         <Container className={classes.drawer}>
           <MUIDrawer variant='temporary' open={status?true:false}>
             {/* {console.log(status)} */}
              <List>
              <ListItem>
                <ListItemIcon onClick={()=>setStatus(!status)}>
                 
                  <ArrowBackIcon/>
                </ListItemIcon>
              </ListItem>
                {SidebarData.map((item, index) => {
                    
                    return(
                      <ListItem onClick={()=>clickHandler(item)} button key={item.title}>
                        <ListItemIcon >
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItem>
                )})}
              </List>
         </MUIDrawer>
         </Container>
        )
      }
      

export default Drawer