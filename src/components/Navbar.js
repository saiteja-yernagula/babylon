import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar,Badge,IconButton } from '@mui/material';

import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import HelpSharpIcon from '@mui/icons-material/HelpSharp';


import 'animate.css/animate.min.css';
import './YourComponent.css';



const Navbar = () => {
  return (

<AppBar position="static" sx={{ bgcolor: "#fff" }} className=' animate__animated  animate__fadeIn'>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1,  }}>
          <img alt='logo' width={150} src='https://www.babylonhealth.com/_next/image?url=https%3A%2F%2Fassets-us-01.kc-usercontent.com%3A443%2F4375e5c0-87b8-0077-7797-0e040a2a0a8d%2Fe8fd6fd9-2003-429c-814f-c26c08bba5f7%2Fbabylon-logo-with-text.png&w=384&q=75'/>
        </Typography>
        <Badge color="error" variant="dot">
         <IconButton aria-label="delete" size="small" color='info'>
          <NotificationsSharpIcon color="inherit" />
         </IconButton>
        </Badge>

      

        <Button  startIcon={<HelpSharpIcon/>}></Button>
        <Avatar alt="Remy Sharp" src="https://cdn5.vectorstock.com/i/1000x1000/97/99/bearded-man-avatar-man-icon-vector-25329799.jpg" />
    
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
