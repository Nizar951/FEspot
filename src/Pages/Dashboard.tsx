import React, { useEffect } from "react";
import axios from "axios";
import {useState} from "react";
import Grid from '@mui/material/Grid';
import Isi from "../Components/cardmusic.tsx";
import {useSelector} from "react-redux";
import Playlist from "../Components/playlist.js";
import Header from "../Components/header";

const Dashboard = (props) => {
  const token = useSelector(state => state.user.user_token)
  const [searchKey, setSearchKey] = useState("")
  const [songs, setSongs] = useState([])
  const [select, setSelect] = useState([])
  const [user, setUser] = useState([])
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const logout = props.logout;
  useEffect(()=>{
    if(token){
      getuser();
      // console.log(token);
    }
  },)

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

  const getuser = () => {
    axios.get("https://api.spotify.com/v1/me", {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then(res =>{
      setUser(res);
      console.log(user);
    })
    .catch(res =>{
      console.log(res);
    })
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

  const handlePlaylistInitiate = (e) => {
    e.preventDefault();
    if (title.length < 10) {alert("Title must be at least 10 characters")};
    let play = axios.post(`https://api.spotify.com/v1/users/${user.id}/playlists`, JSON.stringify({
        name: title,
        description: desc,
        public: false
    }), {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    .then(res => {
        // setPlaylist(res.data);
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })

    return play;
  };

  const addTrackToPlaylist = (playlistID) => {
    axios.post(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, JSON.stringify({
        uris: select,
    }),{
        headers: {
            Authorization: "Bearer " + token
        }
    })
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
  };

  const handlePlaylist = async (e) => {
    e.preventDefault();
    const playlistId = await handlePlaylistInitiate(e);
    addTrackToPlaylist(playlistId.id);
    alert("Playlist created");
    clearState();
  }

  const clearState = () => {
      setSelect([]);
      setTitle("");
      setDesc("");
  };

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  }

  const handleDescChange = (e) => {
      const { value } = e.target;
      setDesc(value);
  }

  return (
    <div>
      
      <Header 
        searchSongs={searchSongs}
        setSearchKey={setSearchKey}
        logout={logout}
      />

      <div className="Body">

      <Playlist 
      handleTitleChange={handleTitleChange} 
      handleDescChange={handleDescChange} 
      handlePlaylist={handlePlaylist}
      />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
      </div>
    </div>
  );
};

export default Dashboard;