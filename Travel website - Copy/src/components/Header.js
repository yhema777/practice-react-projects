import React, { useEffect, useState } from "react";
import { TextField, IconButton, Box, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import logo from '../images/logo.jpg';


const Header = (props) => {
  const [searchValue, setSearchValue] = useState(props.filterValue);

  const handleSearch = (oEvent) => {
    props.setFilterValue(searchValue);
  };

  const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if(code === 13) { // 13 is the enter keycode
      props.setFilterValue(searchValue);
    } 
  };

  useEffect(() => {
    setSearchValue(props.filterValue);
  }, [props.filterValue]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={2} sm={4} xs={5}>
          <img src={logo} alt="Travel India" width="150" height="70" style={{ marginLeft: "14px" }} />
        </Grid>
        <Grid item md={8} sm={8} xs={7}>
          <Box display="flex" alignItems="end" justifyContent="center" sx={{ padding: "0 15px", height: "70px" }}>
            <TextField
              size="small"
              placeholder="Where do you want to go?"
              sx={{ width: "100%" }}
              value={searchValue}
              onChange={event => setSearchValue(event.target.value)}
              onKeyDown={(e) => enterPressed(e)}
              InputProps={{
                startAdornment: <LocationOnIcon color="error" sx={{ mr: '10px' }} />,
                endAdornment: <IconButton color="default" sx={{ p: '10px' }} onClick={e => handleSearch(e)}><SearchIcon /></IconButton>
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
