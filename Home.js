import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Home =()=>{
return (
  <div>
    <Box>
 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3} sx={{backgroundColor:"#321fdb"}}>
       1
        </Grid>
        <Grid item xs={3} sx={{backgroundColor:"#39f"}}>
         2
        </Grid>
        <Grid item xs={3}  sx={{backgroundColor:"#ffc107"}}>
         3
        </Grid>
        <Grid item xs={3}  sx={{backgroundColor:"#dc3545"}}>
          3
        </Grid>
      </Grid>
      </Box>
</div>
)
}
export default Home