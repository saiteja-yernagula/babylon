import React from 'react';
import { Box,Paper,Grid,Typography,IconButton,CircularProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:'#fff',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height:'70vh',
    marginTop:'10px',
  }));

const items = ["Brain", "Thyroid", "Heart","Lungs","Stomach","liver","Blowels","Pancreas","Bladder"];


const Comp4 = () => {
  return (
    <>
    <Typography variant='h6' sx={{fontWeight:'bold'}}>Digital twin </Typography>

<Grid direction='row' container> 
<Grid item xs={4} md={4}>
 <Item>
 <Box>
  <IconButton aria-label="delete" size="small" >
    <CircularProgress color="success" variant="determinate" value={85} />
    <Typography variant='body2' > Acitvity </Typography>
   </IconButton>

   <IconButton aria-label="delete" size="small" >
    <CircularProgress color="warning" variant="determinate" value={60} />
    <Typography variant='body2' > Nutrition </Typography>
   </IconButton>

   <IconButton aria-label="delete" size="small" >
    <CircularProgress color="success" variant="determinate" value={75} />
    <Typography variant='body2' >Mental Health </Typography>
   </IconButton>

   <Typography variant='subtitle1' > Digital risk </Typography>
   <Typography variant='body2' >we checked your risk 41 out of 50 </Typography>


 </Box>
</Item>
</Grid>

<Grid item xs={4} md={4}>
 <Item>
    <img src='https://www.pinclipart.com/picdir/big/565-5658328_body-blue-well-of-human-body-blue-png.png' alt='body' width='100%' height='90%'/>
</Item>
</Grid>

<Grid item xs={4} md={4}>
 <Item>
    <Box>
     {items.map((item, index) => (
    <IconButton aria-label="delete" size="small" key={index}>
     <CheckCircleIcon fontSize="inherit" color="success" />
    <Typography variant='body1' sx={{fontWeight:'semibold'}}>{item} </Typography>
   </IconButton> 
    ))}
    <IconButton aria-label="delete" size="small" >
     <CheckCircleIcon fontSize="inherit" color="warning" />
    <Typography variant='body1' sx={{fontWeight:'semibold'}}>Bones </Typography>
   </IconButton>

   <IconButton aria-label="delete" size="small" >
     <CheckCircleIcon fontSize="inherit" color="primary" />
    <Typography variant='body1' sx={{fontWeight:'semibold'}}>Kidney </Typography>
   </IconButton>

   <IconButton aria-label="delete" size="small" >
     <CheckCircleIcon fontSize="inherit" color="warning" />
    <Typography variant='body1' sx={{fontWeight:'semibold'}}>Blood vesels </Typography>
   </IconButton>
    
     </Box>
</Item>
</Grid>
</Grid>

    </>
  )
}

export default Comp4
