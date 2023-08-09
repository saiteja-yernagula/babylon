import React from 'react';
import { styled } from '@mui/material/styles';
import TextsmsIcon from '@mui/icons-material/Textsms';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Stack,Box,Paper,Grid,Typography,IconButton,Chip,LinearProgress,CircularProgress } from '@mui/material';
import {Table,TableBody,TableCell,TableContainer,TableHead, TableRow} from '@mui/material';
import Todo from './Todo';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:'#fff',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height:'70vh',
    marginTop:'10px',
  }));

  function createData(HPI, FarmHX, SocHX, Plan) {
    return {HPI, FarmHX, SocHX, Plan };
  }
  
  const rows = [
    createData('Episodic Dizziness(GP)', 'Migrane(GP)', 'Non smoker(HC)', ' '),
    createData('Vertigo (AI)', 'Depression(GP)', 'Low alcohol intake (HC) '),
    createData('Hearing loss(Ai)', '', 'Researcher(GP)'),
    createData('Bilateral tinnitus(AI)', ''),
    createData('Aural fullness (AI)', ''),
    createData('Symptoms last hours(GP)', ''),
    createData('Symptoms for months(AI)', ''),

  ];

  const items = ["Brain", "Thyroid", "Heart","Lungs","Stomach","liver","Blowels","Pancreas","Bladder"];



const Comp3 = () => {
  return (
    <Stack sx={{padding:'15px',gap:2,justifyContent:'center'}}   justifyContent="center">
        <Grid container spacing={2} >
    
         <Grid item xs={6} md={4} >
          <Item sx={{ overflow: 'scroll' }}> 
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
          </Item>
         </Grid>
         
         <Grid item xs={6} md={4} >
         <Item>
            <img alt='img' src='https://techwiser.com/wp-content/uploads/2018/10/Make-Video-Calls-From-Android-to-iOS-3.png' width='100%' height='100%'/>
         </Item>
        </Grid>

        <Grid item xs={6} md={4}>
          <Item sx={{ overflow: 'scroll' }}>
            <Box>
                <Box>
                <Typography variant='h6' sx={{fontWeight:'bold'}}>Clinical Codes </Typography>
                
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
          <TableRow  >
            <TableCell>HPI</TableCell>
            <TableCell align="center">FamHX</TableCell>
            <TableCell align="center">SocHX</TableCell>
            <TableCell align="center">Plan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.HPI}
              sx={{  border: 0 }}
            >
              <TableCell component="th" scope="row"><Chip color="info" label={row.HPI} /></TableCell>
              <TableCell align="center"><Chip color="info" label={row.FarmHX} /> </TableCell>
              <TableCell align="center"><Chip color="info" label={row.SocHX} /></TableCell>
              <TableCell align="center">{row.Plsn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


                </Box>
            </Box>
          </Item>
        </Grid>

        <Grid item xs={6} md={4} >
          <Item sx={{ overflow: 'scroll' }}>
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

          </Item>
         </Grid>
         
         <Grid item xs={6} md={4} >
         <Item>
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


         </Item>
        </Grid>

        <Grid item xs={6} md={4}>
          <Item sx={{ overflow: 'scroll' }}>
            <Stack direction="row" justifyContent='space-between' > 
                <Todo/>
            </Stack>
                <hr/>
              <Typography variant='h6' sx={{fontWeight:'bold'}}>Doctor consultant notes </Typography>
           <form  >
            <fieldset style={{height:'30vh'}}>
                <legend>Examinnation notes:</legend>
            </fieldset>
            </form>

          

          </Item>
        </Grid>
         
     </Grid>
    </Stack>
    
  )
}

export default Comp3
