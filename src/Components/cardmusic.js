import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import Tombol from './part/Button';



const Isi = (props) => {

    const {size, url, judul, nama, id, bool, add, remove} = props

  return (
    <Grid item xs={3}>
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

            <Box sx={{alignItems: 'center'}}>
                
                <Tombol
                    statSelect={bool}
                    id={id}
                    add={add}
                    remove={remove}
                />
                
            </Box>

        </Card> 
    </Grid>
  );
}

export default Isi;
