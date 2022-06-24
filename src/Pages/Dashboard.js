import React from "react";
import axios from "axios";
import {useState} from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Isi from "../Components/cardmusic";

const Dashboard = ( props ) => {
  const {token, logout} = props;
  const [searchKey, setSearchKey] = useState("")
  const [songs, setSongs] = useState([])

  const searchSongs = async(e) =>{
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search",{
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
          q: searchKey,
          type: "track"
      }                         
    })
    // console.log(data.tracks.items)
    setSongs(data.tracks.items)
    console.log(songs);
  }

  return (
    <div className="bg-dark text-white">
            <h1>sudah masuk</h1>
            <button onClick={logout}>Logout</button>
            
            <form onSubmit={searchSongs}>
              <input type="text" onChange={e=> setSearchKey(e.target.value)}/>
              <button type="submit">search</button>
            </form>

          <div className="">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {songs.map(song => (
                  <Isi 
                  key={song.key}
                  size={song.album.images[0]} 
                  url={song.album.images[0].url} 
                  nama={song.artists[0].name} 
                  judul={song.name}/>
                ))}
              </Grid>
            </Box>
          </div>
          
    </div>
  );
};

export default Dashboard;