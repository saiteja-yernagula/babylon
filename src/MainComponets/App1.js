import React from 'react';
import './App.css';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography,Button } from '@mui/material';
import 'animate.css/animate.min.css';
import { Link } from 'react-router-dom';




const App1 = () => {
  return (
    <div className='mn1'>

        <div className='wrapper animate__zoomIn animate__animated '>
         <div >
           <CircularProgress size="15rem" color="secondary"  disableShrink/>
         </div>
       </div>


      <div style={{marginLeft:'15px'}} className=' animate__zoomIn animate__animated' >
        <Typography variant='h4' color='secondary' sx={{ mx:1,mb:2,fontWeight: 'bold' }}>Incoming Call</Typography>
        <Link to='babylon'>
        <Button variant="contained" color="info" className='anime' sx={{ mx:1}}>
           Answer
        </Button>
        </Link>

        <Button variant="contained" color="secondary"  className='anime2' sx={{ mx: 1,background:'rgb(28, 127, 233)'}} onClick={()=>{alert('Call rejected')}}>
           Reject
        </Button>
        </div>
        
    </div>
  )
}

export default App1
