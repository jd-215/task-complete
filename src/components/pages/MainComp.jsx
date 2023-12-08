import React from 'react';
import Navbar from '../navigation/Navbar';
import Userlayout from './userManagement/Userlayout';
import { Box } from '@mui/material';

function MainComp() {
  return (
    <>
      <Box sx={{ bgcolor: '#E7F3F9', height: '100vh' }}>
        <Navbar />
        <Userlayout />
      </Box>
    </>
  );
}

export default MainComp;
