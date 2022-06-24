import './App.css';
import data from './example';
import Isi from './Components/cardmusic';

function App() {

  const clientid = process.env.REACT_APP_SPOTKEY;
  console.log(clientid);

  return (
    <div className="App">
       
        <Isi 
          key={data.id}
          size={data.album.images[0].height}
          url={data.album.images[0].url}
          judul={data.album.name}
          nama={data.artists[0].name}
          />

    </div>
       
  );
}

export default App;
