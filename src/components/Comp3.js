import React from 'react';

import { Box,Paper,Typography,Chip } from '@mui/material';
import {Table,TableBody,TableCell,TableContainer,TableHead, TableRow} from '@mui/material';


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

const Comp3 = () => {
  return (
    <>
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
    </>
  )
}

export default Comp3
