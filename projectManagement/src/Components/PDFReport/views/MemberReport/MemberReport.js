import { IconButton, Typography } from '@mui/material';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});
const MyDoc = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
)

const MemberReport = () => (
    <div>

        <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <IconButton><DownloadForOfflineOutlinedIcon /></IconButton>)}
        </PDFDownloadLink>
        <Typography>Member Report</Typography>
    </div>
)

export default MemberReport;