import React, { useState,useEffect,useContext } from 'react'
import {makeStyles} from '@mui/styles'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {useNavigate} from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import { SidebarData } from '../../assets/sidebardata'
import './navbar.css'
import NoteIcon from '@mui/icons-material/Note';
import { IconContext } from 'react-icons'
import { AppBar, Toolbar, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { DrawerContext } from '../../contexts/DrawerContext'



const useStyles = makeStyles({
    toolbar:{
      display:"flex",
      justifyContent:'space-between'
     
      
    },sideButtons:{
        
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        flex: '1'
    },logo:{
        flex: '1'
    }
  })

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    flex: '2',
    flexShrink:'1',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const Navbar = () => {
    const {status,setStatus} = useContext(DrawerContext);
    let navigate = useNavigate();
    const classes = useStyles();
    const clickHandler = () => {
        navigate("/login");
        console.log("click working")
    }
    

  return (
    <>
    <IconContext.Provider value={{color:"white",size:'30px'} }>
    <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
            <GiHamburgerMenu onClick={()=>setStatus(!status)} style={{margin:'10px',cursor:'pointer'}}/>
            <Typography className={classes.logo}variant='h6'>Chaitanya Samvad</Typography>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div className={classes.sideButtons}>
                <Button variant="contained" color='error' onClick={clickHandler} startIcon={<NoteIcon/> }>Submit Your Paper</Button>
              <Badge badgeContent={2} color='error'><NotificationsIcon/></Badge>
             
              <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
             
              aria-haspopup="true"
              
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
    </AppBar>
    </IconContext.Provider>
    </>
  );
}

export default Navbar