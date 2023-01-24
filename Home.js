import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LineChart from './Chart.js'
import Divider from '@mui/material/Divider';
const Home =()=>{
return (
  <div>
   <Box>
 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3} sx={{backgroundColor:"#321fdb"}}>
         {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. 
        </Typography> */}
       
        </Grid>
        <Grid item xs={3} sx={{backgroundColor:"#39f"}}>
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. 
        </Typography> */}
        </Grid>
        <Grid item xs={3}  sx={{backgroundColor:"#ffc107"}}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. 
        </Typography>
        </Grid>
        <Grid item xs={3}  sx={{backgroundColor:"#dc3545"}}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. 
        </Typography>
        </Grid>
      </Grid>
      </Box>

<Box sx={{boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%) ,0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",padding:"10px",margin:"20px"}}>
<Typography >Traffic & Sales </Typography>
<Divider />
<Grid container>
<Grid xs={6}>
  <Grid container>

       effsdftestt
  
</Grid>
<Grid xs={6}>

</Grid>
</Grid>
</Box>

</div>
)
}
export default Home