import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LineChart from './Chart.js';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import MailIcon from '@mui/icons-material/Mail';
import BoyIcon from '@mui/icons-material/Boy';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
const Home = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
      'Yiorgos Avraamu',
      6.0,
      24,
      4.0
    ),
    createData(
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
      237,
      9.0,
      37,
      4.3
    ),
    createData(
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
      262,
      16.0,
      24,
      6.0
    ),
    createData(
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
      305,
      3.7,
      67,
      4.3
    ),
    createData(
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
      356,
      16.0,
      49,
      3.9
    ),
  ];
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3} sx={{ backgroundColor: '#321fdb' }}>
            {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. 
        </Typography> */}
          </Grid>
          <Grid item xs={3} sx={{ backgroundColor: '#39f' }}>
            {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. 
        </Typography> */}
          </Grid>
          <Grid item xs={3} sx={{ backgroundColor: '#ffc107' }}>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus.
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ backgroundColor: '#dc3545' }}>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          boxShadow:
            '0px 2px 4px -1px rgb(0 0 0 / 20%) ,0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
          padding: '10px',
          margin: '20px',
        }}
      >
        <Typography>Traffic & Sales </Typography>
        <Divider />
        <Grid container sx={{ padding: '10px' }}>
          <Grid xs={6}>
            <Box sx={{ display: 'flex', gap: '40%' }}>
              <Box>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div
                    style={{
                      width: '5px',
                      height: '70px',
                      backgroundColor: '#39f',
                    }}
                  ></div>
                  <div>
                    <Typography>New Clients</Typography>
                    <Typography>9999</Typography>
                  </div>
                </div>
              </Box>
              <Box>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div
                    style={{
                      width: '5px',
                      height: '70px',
                      backgroundColor: '#e55353',
                    }}
                  ></div>
                  <div>
                    <Typography>Recurring Clients</Typography>
                    <Typography>9999</Typography>
                  </div>
                </div>
              </Box>
            </Box>
            <Divider sx={{ padding: '10px' }} />
            <Box sx={{ display: 'flex', gap: '20px', padding: '10px' }}>
              <Typography>Monday</Typography>
              <Box sx={{ width: '100%', marginTop: '10px' }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: '20px', padding: '10px' }}>
              <Typography>Tuesday</Typography>
              <Box sx={{ width: '100%', marginTop: '10px' }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px', padding: '10px' }}>
              <Typography>Wednesday</Typography>
              <Box sx={{ width: '100%', marginTop: '10px' }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px', padding: '10px' }}>
              <Typography>Thursday</Typography>
              <Box sx={{ width: '100%', marginTop: '10px' }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px', padding: '10px' }}>
              <Typography>Friday</Typography>
              <Box sx={{ width: '100%', marginTop: '10px' }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px', padding: '10px' }}>
              <Typography>Saturday</Typography>
              <Box sx={{ width: '100%', marginTop: '10px' }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px', padding: '10px' }}>
              <Typography>Sunday</Typography>
              <Box sx={{ width: '100%', marginTop: '10px' }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
            </Box>
          </Grid>

          <Grid xs={6}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <Box>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div
                    style={{
                      width: '5px',
                      height: '70px',
                      backgroundColor: '#f9b115',
                    }}
                  ></div>
                  <div>
                    <Typography>Pageviews</Typography>
                    <Typography>9999</Typography>
                  </div>
                </div>
              </Box>
              <Box>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div
                    style={{
                      width: '5px',
                      height: '70px',
                      backgroundColor: '#2eb85c',
                    }}
                  ></div>
                  <div>
                    <Typography>Organic</Typography>
                    <Typography>9999</Typography>
                  </div>
                </div>
              </Box>
            </Box>
            <Box>
              <BoyIcon sx={{ paddingTop: '5px' }} />
              <span>Male</span>
            </Box>
            <Box sx={{ width: '100%', marginTop: '10px' }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                color="success"
              />
            </Box>
            <Box>
              <BoyIcon sx={{ paddingTop: '5px', marginTop: '20px' }} />
              <span>FeMale</span>
            </Box>
            <Box sx={{ width: '100%', marginTop: '10px' }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                color="success"
              />
            </Box>
          </Grid>
        </Grid>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <BoyIcon />
                </TableCell>
                <TableCell align="right">User</TableCell>
                <TableCell align="right">Country</TableCell>
                <TableCell align="right">Usage</TableCell>
                <TableCell align="right">Payment Method</TableCell>
                <TableCell align="right">activity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};
export default Home;
