import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Header = (props) =>{
    return(
        <div className="Header">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="success">
            <Toolbar>
            
            <form onSubmit={props.searchSongs}>
              
              <input
                placeholder="Search songs"
                inputProps={{ 'aria-label': 'search' }}
                type="text" 
                onChange={e=> props.setSearchKey(e.target.value)}
              />
            </form>

            <Grid container spacing={2}>
              
              <Grid item xs={8}>
                <h2>Spotify</h2>
              </Grid>

              <Grid item xs={4}>
              </Grid>
              
            </Grid>

            <Button 
              variant="contained"  
              color="error"
              onClick={props.logout}
              >
                Logout
            </Button>

            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
}

export default Header;