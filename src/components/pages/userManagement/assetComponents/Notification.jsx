import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Notification = () => {
  return (
    <>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">
          User Added successfully
        </Alert>
      </Stack>
    </>
  );
};

export default Notification;
