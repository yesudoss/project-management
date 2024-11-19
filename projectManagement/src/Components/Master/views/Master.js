import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Base from '../../Base/views/Base';
import Profile from './Profile';
import FileUploader from './FileUploader';
import DragNDrop from './DragNDrop';
import KanbanBoard from './KanbanBoard/KanbanBoard';
import PdfReportLandingPage from '../../PDFReport/views/PdfReportLandingPage';
import { useState } from 'react';
import DragDrop from './DragDrop/DragDrop';

export default function Master() {
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
                            <Tab label="Profile" value="1" sx={{ textTransform: "none" }} />
                            <Tab label="File Upload" value="2" sx={{ textTransform: "none" }} />
                            <Tab label="Invoice Report" value="3" sx={{ textTransform: "none" }} />
                            <Tab label="Drand N Drop" value="4" sx={{ textTransform: "none" }} />
                            <Tab label="Kanban" value="5" sx={{ textTransform: "none" }} />
                            <Tab label="Drand and Drop" value="6" sx={{ textTransform: "none" }} />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Profile />
                    </TabPanel>
                    <TabPanel value="2">
                        <FileUploader />
                    </TabPanel>
                    <TabPanel value="3">
                        <PdfReportLandingPage />
                    </TabPanel>
                    <TabPanel value="4">
                        <DragNDrop />
                    </TabPanel>
                    <TabPanel value="5">
                        <KanbanBoard />
                    </TabPanel>
                    <TabPanel value="6">
                        <DragDrop />
                    </TabPanel>
                </TabContext>
            </Box>
        </Base>
    );
}
