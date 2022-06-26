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
  const [select, setSelect] = useState([])

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

  const add = (id) => {
    const selectedSong = select;
    selectedSong.push(id);
    setSelect(selectedSong);
  };

  const remove = (id) => {
      const selectedSong = select;
      for (let i = 0; i < select.length; i++) {
          if (select[i] === id) {
              selectedSong.splice(i, 1);
          }
      }
      setSelect(selectedSong);
  }

  const getStatus = (id) => {
      let status = false;
      for (let i = 0; i < select.length; i++) {
          if (select[i] === id) {
              status = true;
          }
      }
      return status;
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

                {songs.map((song) => {
                  const status = getStatus(song.uri);

                  return(
                    <Isi 
                    key={song.id}
                    size={song.album.images[0]} 
                    url={song.album.images[0].url} 
                    nama={song.artists[0].name} 
                    judul={song.name}
                    id={song.uri}
                    bool={status}
                    add={add}
                    remove={remove}
                    />
                );
              })}
                
              </Grid>
            </Box>
          </div>

    </div>
  );
};

export default Dashboard;