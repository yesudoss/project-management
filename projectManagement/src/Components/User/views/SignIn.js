import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { Container } from '@mui/material';


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

export default function SignIn() {
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
                    <Grid item xs={12} md={7.5}>
                        <h1 style={{ margin: "0px", fontSize: "175px", fontWeight: 300, color: theme?.palette?.primary?.light }}>SPMS</h1>
                        <h4 style={{ margin: "0px", fontSize: "25px", fontWeight: 300 }}>Software Project Management System</h4>
                    </Grid>
                    <Grid item xs={12} md={4.5}>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    size='small'
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    size='small'
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="/forgotPassword" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}