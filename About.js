import * as React from 'react';
import LineChart from './LineChart.js';
import Typography from '@mui/material/Typography';
const About = () => {
  return (
    <div>
      {/* <LineChart /> */}
      <h1>Hello About Page</h1>
    </div>
  );
};
export default About;
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardHeader,
// } from '@material-ui/core/';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(2),
//   },
// }));

// export default function About() {
//   const classes = useStyles();
//   const data = {
//     name: [
//       { quarter: 1, earnings: 13000 },
//       { quarter: 2, earnings: 16500 },
//       { quarter: 3, earnings: 14250 },
//       { quarter: 4, earnings: 19000 },
//     ],
//     id: [1, 2, 3, 4],
//   };
//   return (
//     <>
//       {data.id.map((elem) => (
//         <Grid
//           container
//           spacing={2}
//           direction="row"
//           justify="flex-start"
//           alignItems="flex-start"
//         >
//           {data.name.map((elem) => (
//             <Grid item xs={3} key={data.name.indexOf(elem)}>
//               <Card>
//                 <CardHeader title={name.quarter} subheader={name.quarter} />
//                 <CardContent>
//                   <Typography variant="h5" gutterBottom>
//                     Hello World
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       ))}
//     </>
//   );
// }
