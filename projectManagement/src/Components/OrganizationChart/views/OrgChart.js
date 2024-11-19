import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Base from '../../Base/views/Base';
import { useState } from 'react';
import OrganizationChart from './OrganizationChart/OrganizationChart';
import CompanyChart from './CompanyChart/CompanyChart';

export default function OrgChart() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Base>
            <Box sx={{ width: '100%', typography: 'body1', minHeight: "87vh" }}>
                <TabContext value={value}>
                    <Box>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Org Chart 1" value="1" sx={{ textTransform: "none" }} />
                            <Tab label="Org Chart 2" value="2" sx={{ textTransform: "none" }} />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <OrganizationChart />
                    </TabPanel>
                    <TabPanel value="2">
                        <CompanyChart />
                    </TabPanel>
                </TabContext>
            </Box>
        </Base>
    );
}
