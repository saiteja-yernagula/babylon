import React from 'react';
import { styled } from '@mui/material/styles';
import { Stack,Paper,Grid } from '@mui/material';


import Comp5 from './Comp5';
import Comp6 from './Comp6';
import Comp4 from './Comp4';
import Comp33 from './Comp3';
import Comp2 from './Comp2';
import Comp1 from './Comp1';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:'#fff',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height:'70vh',
    marginTop:'10px',
  }));


  
 



const Comp0mn = () => {
  return (
    <Stack sx={{padding:'15px',gap:2,justifyContent:'center'}}   justifyContent="center">
        <Grid container spacing={2} >

         <Grid item xs={12} md={4} >
          <Item sx={{ overflow: 'scroll' }}> 
            <Comp1/>
          </Item>
         </Grid>

         <Grid item xs={12} md={4} >
         <Item>
          <Comp2/>
         </Item>
        </Grid>
    
        <Grid item xs={12} md={4}>
         <Item sx={{ overflow: 'scroll' }}>
            <Comp33/>
         </Item>
        </Grid>

         <Grid item xs={12} md={4} >
          <Item sx={{ overflow: 'scroll' }}>
            <Comp4/>
          </Item>
         </Grid>

        <Grid item xs={12} md={4} >
         <Item>
          <Comp5/>
         </Item>
        </Grid>

        <Grid item xs={12} md={4}>
          <Item sx={{ overflow: 'scroll' }}>
           <Comp6/>
          </Item>
        </Grid>
         
     </Grid>
    </Stack>
    
  )
}

export default Comp0mn
