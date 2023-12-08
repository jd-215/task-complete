import * as React from 'react';
import { Button, Grid, Paper, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';

function FormFields() {
  return (
    <>
      <Grid
        container
        spacing={5}
        sm={12}
        md={12}
        lg={12}
        sx={{ padding: '20px' }}
      >
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            id="outlined-basic"
            label="User ID"
            variant="outlined"
            sx={{ width: '100%' , height:"20px", borderRadius:"50px",m:1  }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            id="outlined-basic"
            label="Role Name"
            variant="outlined"
            sx={{ width: '100%' , height:"20px", borderRadius:"50px",m:1}}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            id="outlined-basic"
            label="Employee ID"
            variant="outlined"
            sx={{ width: '100%' , height:"20px", borderRadius:"50px",m:1}}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            id="outlined-basic"
            label="Employee Code"
            variant="outlined"
            sx={{ width: '100%' , height:"20px", borderRadius:"50px",m:1}}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            id="outlined-basic"
            label="Branch Name"
            variant="outlined"
            sx={{ width: '100%' , height:"20px", borderRadius:"50px",m:1}}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            id="outlined-basic"
            label="Branch Code"
            variant="outlined"
            sx={{ width: '100%' , height:"20px", borderRadius:"50px",m:1}}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            id="outlined-basic"
            label="Department Name"
            variant="outlined"
            sx={{ width: '100%' , height:"20px", borderRadius:"50px",m:1}}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            id="outlined-basic"
            label="Department Code"
            variant="outlined"
            sx={{ width: '100%' , height:"20px", borderRadius:"50px",m:1}}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ padding: '20px' }}
          >
            <Paper component="div" sx={{ p: '2px 20px' }} elevation={0}>
              <Button
                variant="contained"
                sx={{
                  marginLeft: 'auto',
                  pt: 1,
                  pb: 1,
                  pr: 6,
                  pl: 6,
                  backgroundColor: 'rgba(2, 48, 106, 0.5);',
                  color: 'white',
                  borderRadius:"10px"
                }}
              >
                Reset
              </Button>
            </Paper>
            <Paper component="div" sx={{ p: '2px 10px' }} elevation={0}>
              <Button
                variant="contained"
                sx={{
                  pt: 1,
                  pb: 1,
                  pr: 6,
                  pl: 6,
                  backgroundColor: '#0BC1CF',
                  borderRadius:"10px",
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#0BC1DF',
                    '@media (hover: none)': {
                      backgroundColor: '#0BC1CF',
                    },
                  },
                }}
              >
                Submit
              </Button>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default FormFields;
