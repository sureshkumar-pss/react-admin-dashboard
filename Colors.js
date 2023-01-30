import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
const Colors = () => {
  // let colors = [
  //   {
  //     heading: 'Brand Primary Color',
  //     secondHeading: 'Hex:',
  //     secondHeadingValue: '#321fdb',
  //   },
  //   {
  //     heading: 'Brand Primary Color',
  //     secondHeading: 'Hex:',
  //     secondHeadingValue: '#321fdb',
  //   },
  //    {
  //     heading: 'Brand Primary Color',
  //     secondHeading: 'Hex:',
  //     secondHeadingValue: '#321fdb',
  //   },
  // ];
  return (
    <>
      <Grid container sx={{ padding: '10px', gap: '20px' }}>
        <Grid xs={2}>
          <Box
            sx={{
              backgroundColor: '#2819af',
              height: '130px',
              width: '130px',
              borderRadius: '12px',
            }}
          ></Box>
          {/* {colors.map((item, index) => (
            <>
              <Typography sx={{ padding: '10px' }}>{item.heading} </Typography>
              <Typography sx={{ padding: '10px' }}>
                {item.secondHeading}
                <span>{item.secondHeadingValue}</span>
              </Typography>
              <Divider />
              <Typography sx={{ padding: '10px' }}>
                RGB: <span sx={{ color: 'light' }}>rgb(50, 31, 219)</span>
              </Typography>
            </>
          ))} */}
          <Typography sx={{ padding: '10px' }}>Brand Primary Color </Typography>{' '}
          
          <Typography sx={{ padding: '10px' }}>
            HEX: <span>#321fdb</span>
          </Typography>
          <Divider />
          <Typography sx={{ padding: '10px' }}>
            RGB: <span sx={{ color: 'light' }}>rgb(50, 31, 219)</span>
          </Typography>
          <Divider />
        </Grid>
        <Grid xs={2}>
          <Box
            sx={{
              backgroundColor: '#8a93a2',
              height: '130px',
              width: '130px',
              borderRadius: '12px',
            }}
          ></Box>
          <Typography sx={{ padding: '10px' }}>Brand Primary Color </Typography>
          <Typography sx={{ padding: '10px' }}>
            HEX: <span>#321fdb</span>
          </Typography>
          <Divider />
          <Typography sx={{ padding: '10px' }}>
            {' '}
            RGB: <span>rgb(50, 31, 219)</span>
          </Typography>
          <Divider />
        </Grid>
        <Grid xs={2}>
          <Box
            sx={{
              backgroundColor: '#198754',
              height: '130px',
              width: '130px',
              borderRadius: '12px',
            }}
          ></Box>
          <Typography sx={{ padding: '10px' }}>Brand Primary Color </Typography>
          <Typography sx={{ padding: '10px' }}>
            HEX: <span>#321fdb</span>
          </Typography>
          <Divider />
          <Typography sx={{ padding: '10px' }}>
            RGB: <span>#321fdb</span>
          </Typography>
          <Divider />
        </Grid>
        <Grid xs={2}>
          <Box
            sx={{
              backgroundColor: '#dc3545',
              height: '130px',
              width: '130px',
              borderRadius: '12px',
            }}
          ></Box>
          <Typography sx={{ padding: '10px' }}>Brand Primary Color </Typography>
          <Typography sx={{ padding: '10px' }}>
            HEX: <span>#321fdb</span>
          </Typography>
          <Divider />
          <Typography sx={{ padding: '10px' }}>
            {' '}
            RGB: <span>#321fdb</span>
          </Typography>
          <Divider />
        </Grid>
        <Grid xs={2}>
          <Box
            sx={{
              backgroundColor: '#ffc107',
              height: '130px',
              width: '130px',
              borderRadius: '12px',
            }}
          ></Box>
          <Typography sx={{ padding: '10px' }}>Brand Primary Color </Typography>
          <Typography sx={{ padding: '10px' }}>
            HEX: <span>#321fdb</span>
          </Typography>
          <Divider />
          <Typography sx={{ padding: '10px' }}>
            {' '}
            RGB: <span>#321fdb</span>
          </Typography>
          <Divider />
        </Grid>
      </Grid>
    </>
  );
};
export default Colors;
