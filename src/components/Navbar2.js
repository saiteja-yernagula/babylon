import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';


import HistoryIcon from '@mui/icons-material/History';
import InsightsIcon from '@mui/icons-material/Insights';
import FlagIcon from '@mui/icons-material/Flag';
import InfoIcon from '@mui/icons-material/Info';
import 'animate.css/animate.min.css';
import './YourComponent.css';


const Navbar2 = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#fff" }} className='animate__animated animate__fadeIn '>
      <Toolbar>
        <Typography variant="subtitle2"  component="div" sx={{ flexGrow:4,display:'flex',color:'black', alignItems:'center' }}>
         <Stack sx={{ paddingRight: 2,fontWeight:'bold',fontSize:20, }}>Lousie reed</Stack>
         <Stack sx={{ paddingRight: 2,  }}>Corporate</Stack>
         <Stack sx={{ paddingRight: 2,  }}>age 30</Stack>
         <Stack>
          <IconButton aria-label="delete" size="small">
           <InfoIcon fontSize="inherit" />
          </IconButton>
         </Stack>
        </Typography>

        <Button  startIcon={<HistoryIcon/>}>Patient Timeline</Button>
        <Button  startIcon={<InsightsIcon/>}> Monitor</Button>
        <Button  startIcon={<FlagIcon/>}>Alerts </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar2;
