import * as React from 'react';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(2),
//   },
// }));

const Contact = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div>
        {' '}
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  } else {
    return (
      <>
        {items.map((item) => (
          <Box>
            <Box
              key={item.id}
              sx={{
                padding: '10px',
                boxShadow:
                  '0px 2px 4px -1px rgb(0 0 0 / 20%) ,0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
              }}
            >
              {item.name} <br />
              {item.username} <br />
              {item.address.street} <br />
              {item.address.city}
              <br />
              <div style={{ color: 'red' }}>{item.address.zipcode}</div>
              {item.phone}
              {item.body}
            </Box>{' '}
            <br />
          </Box>
        ))}
      </>
    );
  }
};
export default Contact;
