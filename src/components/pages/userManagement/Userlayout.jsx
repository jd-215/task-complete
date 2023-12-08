import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import FormLayout from './assetComponents/FormLayout';

const Userlayout = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ transform:"scale(0.9)" }}>
          <Grid item xs={12} md={12} lg={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingTop: '15px',
                paddingBottom: '10px',
                bgcolor: '#E7F3F9',
              }}
            >
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ display: 'flex', flexGrow: 1 , fontWeight:"bold", color: '#02306A' }}
              >
                User Management
              </Typography>
             
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <FormLayout />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Userlayout;
