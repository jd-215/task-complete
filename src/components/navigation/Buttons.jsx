import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
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

export default function ButtonTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 2 }}>
        <Tabs
          sx={{
            // mui lower case tab text

            '.MuiButtonBase-root': { textTransform: 'none' },

            '& .MuiTab-root': {
              color: '#02306A',
            },
            '& .Mui-selected': {
              color: '#0BC1CF',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#0BC1CF',
            },
          }}
          value={value}
          onChange={handleChange}
          textColor="#0BC1CF"
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ padding: 3, fontSize: '16px' }}
            label="User Management"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ padding: 3, fontSize: '16px' }}
            label="User Authorization"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ padding: 3, fontSize: '16px' }}
            label="Reports"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
    </Box>
  );
}
