import React from 'react';
import { Stack,Typography } from '@mui/material';
import Todo from './Todo';



const Comp6 = () => {
  return (
    <>
      <Stack direction="row" justifyContent='space-between' > 
         <Todo/>
       </Stack>
        <hr/>
        <Typography variant='h6' sx={{fontWeight:'bold'}}>Doctor consultant notes </Typography>
        <form  >
          <fieldset style={{height:'30vh'}}>
            <legend>Examination notes:</legend>
          </fieldset>
         </form>
    </>
  )
}

export default Comp6
