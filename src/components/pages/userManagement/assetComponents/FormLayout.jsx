import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Paper, Typography } from '@mui/material';
import Notification from './Notification';
import FormFields from './FormFields';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function FormLayout() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Tabs
            sx={{
              display: 'flex',
              flexGrow: 1,
              // mui lower case tab text

              '.MuiButtonBase-root': { textTransform: 'none' },

              '& .MuiTab-root': {
                color: '#02306A',
              },
              '& .Mui-selected': {
                color: 'White',
              },
              //remove mui tab indicator
              '& .MuiTabs-indicator': {
                display: 'none',
              },
              //add selected tab background color
              '& .Mui-selected': {
                backgroundColor: '#0BC1CF',
                borderRadius: '10px 10px 0px 0px',
                color: 'white',
                // fontWeight: "bold",
                transition: 'all 0.6s ease-in-out',
              },
            }}
            value={value}
            onChange={handleChange}
            textColor="#0BC1CF"
            aria-label="basic tabs example"
          >
            <Tab
              sx={{ padding: 3, fontSize: '16px' }}
              label="Create User"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ padding: 3, fontSize: '16px' }}
              label="Modify user"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ padding: 3, fontSize: '16px' }}
              label="Dormancy Configuration"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Paper sx={{ p: 3 }}>
            <Notification />
            <Paper
              sx={{ display: 'flex', justifyContent: 'flex-end' }}
              elevation={0}
            >
              <Typography
                variant="h6"
                sx={{ pt: 1, fontSize: '11px', color: 'red' }}
              >
                {' '}
                *{' '}
              </Typography>
              <Typography variant="h6" sx={{ pt: 1, fontSize: '11px' }}>
                {' '}
                All fields are mandatory{' '}
              </Typography>
            </Paper>
            <FormFields />
          </Paper>
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default FormLayout;
