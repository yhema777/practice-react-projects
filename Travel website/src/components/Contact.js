import React from "react";
import {
    Tooltip, Box, Grid
} from '@mui/material';
import whatsapp from "../images/whatsapp.png";
const Contact = (props) => {
    return (
        <Box className="aboutus">
            <Box sx={{ color: "#f4364f" }}><h2>Contact Us</h2></Box>
            <Box className="aboutus-content">Resume your travel button, we're planning your next adventure & delightful vacation
                with your family & friends, have a question for us, or need inspiration? We're here
                to help.
            </Box>
            {/* <Box sx={{
                width: "70%",
                mt:"20px",
                justifyContent: "space-between",
                display: "flex"
            }}> */}
            <Box className="main-contact">
                <Grid container spacing={2}>
                    <Grid item md={6} sm={6} xs={12}>
                        <Box className="main-contact-item">
                            <b>Address</b>
                            <Box sx={{ mt: "5px" }}>2nd Floor, S.S. Heights,</Box>
                            <Box>Dammaiguda, P.S. Rao Nagar,</Box>
                            <Box>Hyderabad - 500083 </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        <Box className="main-contact-item">
                            <b>Contact Info:</b>
                            <Box sx={{ mt: "5px" }}>Email: help@gotravelindia.in</Box>
                            <Box sx={{
                                alignItems: "center",
                                display: "flex"
                            }}>
                                Gaurav: <Box>+91-9490247125</Box>
                                <Tooltip title="Gaurav">
                                    <img src={whatsapp} width="25" height="25" style={{ marginLeft: "5px" }}
                                        className="clickable"
                                        onClick={() => window.open(`https://api.whatsapp.com/send?phone=919490247125`, "_blank")}
                                    />
                                </Tooltip>
                            </Box>
                            <Box sx={{
                                alignItems: "center",
                                display: "flex"
                            }}>
                                Dev Rajput: <Box>+91-7799333590</Box>
                                <Tooltip title="Dev Rajpoot">
                                    <img src={whatsapp} width="25" height="25" style={{ marginLeft: "5px" }}
                                        alt="Dev Rajput" className="clickable"
                                        onClick={() => window.open(`https://api.whatsapp.com/send?phone=917799333590`, "_blank")}
                                    />
                                </Tooltip>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* </Box> */}
        </Box>
    );
};
export default Contact;