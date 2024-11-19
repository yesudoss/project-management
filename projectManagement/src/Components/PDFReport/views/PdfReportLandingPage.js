import { PDFDownloadLink } from '@react-pdf/renderer'
import React from 'react'
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';

import Invoice from './Invoice/Invoice'
import invoice from './Invoice/data/dynamic_pdf_invoice_data'
import MemberReport from './MemberReport/MemberReport'
import { IconButton, Typography } from '@mui/material';

import Index from "./resume/Index"

const PdfReportLandingPage = () => {

    return (
        <div>
            <MemberReport />

            <PDFDownloadLink document={<Index />} fileName="Resume.pdf">
                <IconButton><DownloadForOfflineOutlinedIcon /></IconButton>
            </PDFDownloadLink>
            <Typography>Resume</Typography>

            {/* DOWNLOAD BUTTON */}
            <PDFDownloadLink document={<Invoice invoice={invoice} />} fileName="Salaryslip.pdf">
                <IconButton><DownloadForOfflineOutlinedIcon /></IconButton>
            </PDFDownloadLink>
            <Typography>Invoice Report</Typography>

            {/* PDF PREVIEWER */}
            {/* <PDFViewer width="1000" height="600" className="app" >
                <Invoice invoice={invoice} />
            </PDFViewer> */}
        </div>


    )
}

export default PdfReportLandingPage