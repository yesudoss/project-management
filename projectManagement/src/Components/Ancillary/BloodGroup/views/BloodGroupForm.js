import { Box, Button, Grid, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const BloodGroupForm = ({ setOpenPopup, setBloodGroupData }) => {
    const [inputData, setInputData] = useState({})
    console.log(inputData);
    const handleInputChange = (event) => {
        setInputData({ ...inputData, [event?.target?.name]: event?.target?.value })
    }

    const handleSubmit = () => {
        axios.post('http://localhost:6969/api/bloodGroup', { name: inputData?.name })
            .then(function (response) {
                console.log(response);
                setOpenPopup(false)
                axios.get('http://localhost:6969/api/bloodGroups')
                    .then(function (response) {
                        setBloodGroupData(response?.data?.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    <TextField
                        required
                        onChange={(event) => { handleInputChange(event) }}
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth
                        autoComplete="name"
                        variant="standard"
                    />
                </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button sx={{ mt: 3, ml: 1 }} onClick={() => { setOpenPopup(false) }}>
                    Cancel
                </Button>

                <Button
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Box>
        </>
    )
}

export default BloodGroupForm