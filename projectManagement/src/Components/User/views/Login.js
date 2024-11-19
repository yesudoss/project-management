import { Button, IconButton, Link, TextField } from "@mui/material";
import React, { useState } from "react";
import "../css/styles.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ThemeProvider from "../../theme";
import Background from "../../../img/back.png"


export default function Login() {
    const [rightPanelActive, setRightPanelActive] = useState(false)
    const [errors, setErrors] = useState({});
    const [signInData, setState] = useState({
        email_id: "",
        password: "",
        workspace: "",
    });

    const handleSignUpClick = () => {
        setRightPanelActive(true)
    }

    const handleSignInClick = () => {
        setRightPanelActive(false)
    }


    const validate = (fieldValues = signInData) => {
        let temp = { ...errors };

        if ("email_id" in fieldValues) {
            temp.email_id = fieldValues.email_id === "" ? "Email Id is required" : "";
        }

        if ("password" in fieldValues) {
            temp.password = fieldValues.password === "" ? "Password is required" : "";
        }

        if ("workspace" in fieldValues) {
            temp.workspace = fieldValues.workspace === "" ? "Workspace is required" : "";
        }

        setErrors({
            ...temp,
        });

        return Object.values(temp).every((x) => x === "");
    };

    const handleInputChange = (e) => {
        e.preventDefault();
        setState({
            ...signInData,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.type === "click" || event.which === 13) {
            if (validate()) {
                // handleRemember()
            }
        }
    };

    return (
        <ThemeProvider>
            <div className="register-page">
                <div className="wrapper">
                    <div className="page-header bg-default">
                        <div className="page-header-image" style={{
                            backgroundImage: `url(${Background})`
                        }}>
                        </div>
                        <div className={rightPanelActive ? "right-panel-active container" : "container"}>
                            <div className="form-container sign-up-container">
                                <form
                                // className=""
                                >
                                    <h2>Join Us</h2>
                                    <div className="social-container">
                                        <IconButton color="primary" aria-label="facebook">
                                            <FacebookIcon />
                                        </IconButton>
                                        <IconButton color="primary" aria-label="instagram">
                                            <InstagramIcon />
                                        </IconButton>
                                        <IconButton color="primary" aria-label="twitter">
                                            <TwitterIcon />
                                        </IconButton>
                                    </div>
                                    <span className="text-default mb-4">or use your email for registration</span>
                                    <div className="mb-3  form-group">
                                        <div className="input-group-alternative input-group">

                                            <TextField
                                                name="full_name"
                                                sx={{ mt: 2 }}
                                                fullWidth
                                                size="small"
                                                label="Full Name"
                                                required
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3  form-group">
                                        <div className="input-group-alternative input-group">

                                            <TextField
                                                name="email_id"
                                                sx={{ mt: 2 }}
                                                fullWidth
                                                size="small"
                                                label="Email ID"
                                                required
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group-alternative input-group">
                                            <TextField
                                                name="contact"
                                                sx={{ mt: 2 }}
                                                fullWidth
                                                size="small"
                                                label="Contact No"
                                                required
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <Button sx={{ mt: 2 }} variant="outlined" size="small" className="btn btn-primary">Sign Up</Button>
                                </form>
                            </div>
                            <div className="form-container sign-in-container">
                                <form action="#" role="form"
                                // className=""
                                >
                                    <h2>Sign In</h2>
                                    <div className="social-container">
                                        <IconButton color="primary" aria-label="facebook">
                                            <FacebookIcon />
                                        </IconButton>
                                        <IconButton color="primary" aria-label="instagram">
                                            <InstagramIcon />
                                        </IconButton>
                                        <IconButton color="primary" aria-label="twitter">
                                            <TwitterIcon />
                                        </IconButton>
                                    </div>
                                    <span className="text-default mb-4">or use your account</span>
                                    <div className="mb-3  form-group">
                                        <div >
                                            <TextField
                                                name="email_id"
                                                onChange={handleInputChange}
                                                sx={{ mt: 2 }}
                                                fullWidth
                                                size="small"
                                                label="Email ID"
                                                required
                                                type="email"
                                                className="form-control"
                                                {...(errors.email_id && {
                                                    error: true,
                                                    helperText: errors.email_id,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group-alternative input-group">
                                            <TextField
                                                name="password"
                                                onChange={handleInputChange}
                                                sx={{ mt: 2 }}
                                                fullWidth
                                                size="small"
                                                label="Password"
                                                required
                                                type="password"
                                                className="form-control"
                                                {...(errors.password && {
                                                    error: true,
                                                    helperText: errors.password,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group-alternative input-group">
                                            <TextField
                                                name="workspace"
                                                onChange={handleInputChange}
                                                sx={{ mt: 2 }}
                                                fullWidth
                                                size="small"
                                                label="Workspace"
                                                required
                                                className="form-control"
                                                {...(errors.workspace && {
                                                    error: true,
                                                    helperText: errors.workspace,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <Button sx={{ mt: 2 }} variant="outlined" size="small" className="btn btn-primary" onClick={handleSubmit}>Sign In</Button>
                                    <Link underline="always" onClick={() => console.log("/forgotPassword")} variant="body2" sx={{ cursor: "pointer", mt: 2 }}>
                                        Forgot password?
                                    </Link>

                                </form></div><div className="overlay-container">
                                <div className="overlay">
                                    <div className="overlay-panel overlay-left">
                                        <h1 className="text-white">Welcome Back!</h1>
                                        <p>To keep connected with us please login with your personal info</p>
                                        <Button size="small" variant="contained" id="signIn" className="btn-neutral btn btn-default btn-sm" onClick={handleSignInClick}>Sign In</Button>
                                    </div>
                                    <div className="overlay-panel overlay-right">
                                        <h1 className="text-white">Hello, Friend!</h1>
                                        <p>Enter your personal details and start journey with us</p>
                                        <Button size="small" variant="contained" id="signUp" className="btn-neutral btn btn-default btn-sm" onClick={handleSignUpClick}>Sign Up</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
