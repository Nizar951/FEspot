import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';

function Playlist(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <form>
        <CardContent>
          <Typography variant="h5" component="div">
            Create Playlist
          </Typography>

          <Box
          component="form"
          sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          >
              <Input placeholder="Title" 
                variant="standard"
                id="title"
                type="text"
                name="title" 
                onChange={props.handleTitleChange} 
                required minLength={10}
              />
              
              <textarea id="desc" 
              name="desc" 
              type="text" 
              onChange={props.handleDescChange}/>
          </Box>

        </CardContent>
        <CardActions>
            <Button size="small" 
            type="submit" 
            onClick={props.handlePlaylist}>
              Create
            </Button>
        </CardActions>
      </form>
    </Card>
  );
}

export default Playlist;