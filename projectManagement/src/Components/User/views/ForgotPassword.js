import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { Container } from '@mui/material';
import LockSvg from '../../../svg/LockSvg';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Boscosoft
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme =
    createTheme({

        palette: {
            primary: {
                lighter: "#C8FACD",
                light: "#5BE584",
                main: "#00AB55",
                dark: "#007B55",
                darker: "#005249",
            },
            secondary: {
                lighter: "#D6E4FF",
                light: "#84A9FF",
                main: "#3366FF",
                dark: "#1939B7",
                darker: "#091A7A",
            },
            info: {
                lighter: "#CAFDF5",
                light: "#61F3F3",
                main: "#00B8D9",
                dark: "#006C9C",
                darker: "#003768",
            },
            success: {
                lighter: "#D8FBDE",
                light: "#86E8AB",
                main: "#36B37E",
                dark: "#1B806A",
                darker: "#0A5554",
            },
            warning: {
                lighter: "#FFF5CC",
                light: "#FFD666",
                main: "#FFAB00",
                dark: "#B76E00",
                darker: "#7A4100",
            },
            error: {
                lighter: "#FFE9D5",
                light: "#FFAC82",
                main: "#FF5630",
                dark: "#B71D18",
                darker: "#7A0916",
            },
            grey: {
                100: "#F9FAFB",
                200: "#F4F6F8",
                300: "#DFE3E8",
                400: "#C4CDD5",
                500: "#919EAB",
                600: "#637381",
                700: "#454F5B",
                800: "#212B36",
                900: "#161C24",
            },
        },

        typography: {
            fontFamily: '"Public Sans", sans-serif',
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1360,
            },
        },

    })

export default function ForgotPassword() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        navigate('/dashboard');
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid container spacing={1} alignItems="center" justifyContent="center" marginTop="48px">
                    <Grid item>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                maxWidth: "400px"
                            }}
                        >
                            <div style={{ marginBottom: "40px", height: "96px" }}>
                                <LockSvg />
                            </div>
                            <Typography component="h1" variant="h5" fontWeight={700} lineHeight={1.5}>
                                Forgot your password?
                            </Typography>
                            <Typography color="text.secondary" textAlign={"center"} sx={{
                                fontWeight: 600,
                                fontSize: "0.775rem",
                            }}>
                                Please enter the email address associated with your account and We will email you a link to reset your password.
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    size='small'
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="User id or Email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                                    Send Request
                                </Button>
                                <Button fullWidth variant="outlined" sx={{ mb: 2 }} onClick={() => navigate("/")}>
                                    Cancel
                                </Button>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}