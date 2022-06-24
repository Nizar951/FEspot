import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Isi = ({size, url, judul, nama}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={size}
              image={url}
              alt="album cover"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {judul}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {nama}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Select
            </Button>
          </CardActions>
    </Card>
  );
}

export default Isi;
