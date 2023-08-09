import React from 'react';
import TextsmsIcon from '@mui/icons-material/Textsms';

import { Stack,Box,Typography,IconButton,Chip } from '@mui/material';


const Comp1 = () => {
  return (
    <>
      <Box >
         <Box >
                <Typography variant='h6' sx={{fontWeight:'bold'}}>Past Medical History </Typography>
                <Typography variant='body1' sx={{fontWeight:'semibold'}}>Relevant Match </Typography>
                <IconButton aria-label="delete" size="small">
                 <TextsmsIcon fontSize="inherit" />
                <Typography variant='body1' sx={{fontWeight:'semibold'}}>Test Result  </Typography>
               </IconButton>
               
               <Stack direction="row" justifyContent='space-between' sx={{padding:'5px'}} spacing={4}>
                <Chip color="info" label='Normal liver function (Ai)' /> 
                <Typography>4 weeks ago</Typography>
               </Stack>

               <Stack direction="row" justifyContent='space-between' sx={{padding:'5px'}} spacing={4}>
                <Chip color="info" label='Normal Thyroid function (Ai)' /> 
                <Typography>4 weeks ago</Typography>
               </Stack>

               <Stack direction="row" justifyContent='space-between' sx={{padding:'5px'}} spacing={4}>
                <Chip color="info" label='Normal Blood function (Ai)' /> 
                <Typography>4 weeks ago</Typography>
               </Stack>

               <IconButton aria-label="delete" size="small">
                 <TextsmsIcon fontSize="inherit" />
                <Typography variant='body1' sx={{fontWeight:'semibold'}}>Prescription  </Typography>
               </IconButton>
               
               <Stack direction="row" justifyContent='space-between' sx={{padding:'5px'}} spacing={4}>
                <Chip color="info" label='Yasmin 1 tablet OD' /> 
                <Typography>3 years ago</Typography>
               </Stack>

               <Stack direction="row" justifyContent='space-between' sx={{padding:'5px'}} spacing={4}>
                <Chip color="info" label=' Ceetirizine 10mg OD PRN' /> 
                <Typography>2 years ago</Typography>
               </Stack>

               

               <Typography variant='body1' sx={{fontWeight:'semibold'}}>Time line  </Typography>
                
               <IconButton aria-label="delete" size="small">
                 <TextsmsIcon fontSize="inherit" />
                <Typography variant='body1' sx={{fontWeight:'semibold'}}>AI Assessment </Typography>
               </IconButton>

               <Stack direction="row" justifyContent='space-between' sx={{padding:'5px'}} spacing={4}>
                <Chip color="info" label="Menier's disease(AI)" /> 
                <Typography>Just now</Typography>
               </Stack>

               <IconButton aria-label="delete" size="small">
                 <TextsmsIcon fontSize="inherit" />
                <Typography variant='body1' sx={{fontWeight:'semibold'}}>AI Assessment  </Typography>
               </IconButton>

               <Stack direction="row" justifyContent='space-between' sx={{padding:'5px'}} spacing={4}>
                <Chip color="info" label='Glandular fever(AI)' /> 
                <Typography>6 weeks ago</Typography>
               </Stack>
       </Box>
      </Box>
    </>
  )
}

export default Comp1
