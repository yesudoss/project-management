// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
// ** Icon Imports
import DescriptionIcon from '@mui/icons-material/Description';
import CloseIcon from '@mui/icons-material/Close';
// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import FileUploadSvg from '../../../svg/FileUploadSvg'

// Styled component for the upload image inside the dropzone area
const Img = styled('img')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(15.75)
    },
    [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(4)
    },
    [theme.breakpoints.down('sm')]: {
        width: 160
    }
}))

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(4)
    }
}))

const FileUploader = () => {
    // ** State
    const [files, setFiles] = useState([])

    // ** Hooksa
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file)))
        }
    })

    const renderFilePreview = file => {
        if (file.type.startsWith('image')) {
            return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />
        } else {
            return <DescriptionIcon />
        }
    }

    const handleRemoveFile = file => {
        const uploadedFiles = files
        const filtered = uploadedFiles.filter(i => i.name !== file.name)
        setFiles([...filtered])
    }

    const fileList = files.map(file => (
        <ListItem key={file.name} sx={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "6px",
            padding: "0.625rem 0.6rem 0.625rem 1.5rem",
            border: "1px solid rgba(93, 89, 98, 0.14)"
        }}>
            <div className='file-details' style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "10px" }} className='file-preview'>{renderFilePreview(file)}</div>
                <div>
                    <Typography className='file-name'>{file.name}</Typography>
                    <Typography className='file-size' variant='body2'>
                        {Math.round(file.size / 100) / 10 > 1000
                            ? (Math.round(file.size / 100) / 10000).toFixed(1) + "MB"
                            : (Math.round(file.size / 100) / 10).toFixed(1) + "KB"}
                    </Typography>
                </div>
            </div>
            <IconButton onClick={() => handleRemoveFile(file)}>
                <CloseIcon fontSize={"small"} />
            </IconButton>
        </ListItem>
    ))

    const handleLinkClick = event => {
        event.preventDefault()
    }

    const handleRemoveAllFiles = () => {
        setFiles([])
    }

    return (
        <Fragment>
            <Grid spacing={2} container direction="row" justifyContent="space-between">
                <Grid item xs={12} md={6}>
                    <div style={{
                        minHeight: "150px",
                        display: "flex",
                        flexWrap: "wrap",
                        cursor: "pointer",
                        position: "relative",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem",
                        borderRadius: "6px",
                        border: "2px dashed rgba(93, 89, 98, 0.22)"
                    }} {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center' }}>
                            <FileUploadSvg />
                            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'center', 'inherit'] }}>
                                <HeadingTypography variant='h5'>Drop files here or click to upload.</HeadingTypography>
                                <Typography color='textSecondary'>
                                    Drop files here or click{' '}
                                    <Link href='/' onClick={handleLinkClick}>
                                        browse
                                    </Link>{' '}
                                    thorough your machine
                                </Typography>
                            </Box>
                        </Box>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    {files.length ? (
                        <Fragment>
                            <List sx={{ padding: "0px" }}>{fileList}</List>
                            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.5625rem" }}>
                                <Button sx={{ marginRight: "0.875rem" }} color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                                    Remove All
                                </Button>
                                <Button variant='contained'>Upload Files</Button>
                            </div>
                        </Fragment>
                    ) : null}
                </Grid>
            </Grid>


        </Fragment>
    )
}

export default FileUploader
