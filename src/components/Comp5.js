import React from 'react';
import {Box,Typography,LinearProgress } from '@mui/material';


const Comp5 = () => {
  return (
    <>
    <Typography variant='h6' sx={{fontWeight:'bold'}}>Live Posssible causes</Typography>
         <Box>
         <Typography variant='h6' sx={{fontWeight:'400',paddingTop:'10px'}}>Minear's disease</Typography>
         <LinearProgress variant="determinate" value={90} />
         <Typography variant='body1' sx={{fontWeight:'400',paddingTop:'5px',paddingBottom:'10px'}}>90% Very Likely</Typography>
         </Box>   

         <Box>
         <Typography variant='h6' sx={{fontWeight:'400',paddingTop:'10px'}}>Benign Paroxysmal Positional Vertigo</Typography>
         <LinearProgress variant="determinate" value={10} />
         <Typography variant='body1' sx={{fontWeight:'400',padding:'5px',paddingBottom:'10px'}}>10% Very Likely</Typography>
         </Box> 

         <Box>
         <Typography variant='h6' sx={{fontWeight:'400',paddingTop:'10px'}}>Labyrinthitis</Typography>
         <LinearProgress variant="determinate" value={5} />
         <Typography variant='body1' sx={{fontWeight:'400',paddingTop:'5px',paddingBottom:'10px'}}>5% Very Likely</Typography>
         </Box> 

    </>
  )
}

export default Comp5
