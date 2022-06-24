import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import data from './example';

function App() {

  const clientid = process.env.REACT_APP_SPOTKEY;
  console.log(clientid);

  return (
    <div className="App">
       
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={data.album.images[0].height}
              image={data.album.images[0].url}
              alt="album cover"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.album.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.artists[0].name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Select
            </Button>
          </CardActions>
        </Card>

    </div>
       
  );
}

export default App;
