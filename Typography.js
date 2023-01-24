import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Typography =()=>{
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories };
  }
  const rows = [
    createData('<h1></h1>',<h1>h1. Bootstrap heading</h1>),
    createData('<h2></h2>',<h2>h2. Bootstrap heading</h2>),
    createData('<h3></h3>', <h3>h3. Bootstrap heading</h3>),
    createData('<h4></h4>', <h4>h4. Bootstrap heading</h4>),
    createData('<h5></h5>', <h5>h5. Bootstrap heading</h5>)
  
  ];
return (
  <>
  
 <Box sx={{boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%) ,0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"}}>
     <Box sx={{display:"flex",justifyContent:"space-between",padding:"5px"}}>
         <h5>Headings</h5>
         <a>Docs</a>
     </Box>
     <Divider />
           Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Headings</TableCell>
            <TableCell >Example</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{color:"red"}}>
                {row.name}
              </TableCell>
              <TableCell sx={{padding:"0px"}} >{row.calories}</TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

</Box>
</>
)
}
export default Typography