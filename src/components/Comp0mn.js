import React from 'react';
import { Paper,Grid,Stack} from '@mui/material';
import { styled } from '@mui/material/styles';

import 'animate.css/animate.min.css';
import './YourComponent.css';


import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import Comp4 from './Comp4';
import Comp5 from './Comp5';
import ChatApp from './ChatApp';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:'#fff',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height:'70vh',
    marginTop:'10px',
  }));


  
 

const Comp0mn = () => {
  return (
    <Stack sx={{padding:'15px',gap:2,justifyContent:'center'}} justifyContent="center">
        <Grid container spacing={2} >

         <Grid item xs={12} md={4} className='animate__zoomIn animate__animated my-element '>
          <Item sx={{ overflow: 'scroll' }}> 
            <Comp1/>
          </Item>
         </Grid>

         <Grid item xs={12} md={4} className='animate__zoomIn animate__animated my-element animate__slow'>
         <Item>
          <Comp2/>
         </Item>
        </Grid>
    
        <Grid item xs={12} md={4} className='animate__zoomIn animate__animated my-element '>
         <Item sx={{ overflow: 'scroll' }}>
            <Comp3/>
         </Item>
        </Grid>

         <Grid item xs={12} md={4} className='animate__zoomIn animate__animated my-element animate__delay-1s'>
          <Item sx={{ overflow: 'scroll' }}>
            <Comp4/>
          </Item>
         </Grid>

        <Grid item xs={12} md={4} className='animate__zoomIn animate__animated my-element animate__slower'>
         <Item>
          <Comp5/>
         </Item>
        </Grid>

        <Grid item xs={12} md={4} className='animate__zoomIn animate__animated my-element animate__delay-1s'>
          <Item sx={{ overflow: 'scroll' }}>
           <ChatApp/>
          </Item>
        </Grid>
         
     </Grid>
    </Stack>
    
  )
}

export default Comp0mn
