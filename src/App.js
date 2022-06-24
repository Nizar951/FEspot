import './App.css';
import data from './example';
import Isi from './Components/cardmusic';

function App() {

  const clientid = process.env.REACT_APP_SPOTKEY;
  console.log(clientid);

  return (
    <div className="App">
       {data.map(item =>(
          <Isi 
            key={item.id}
            size={item.album.images[0].height}
            url={item.album.images[0].url}
            judul={item.album.name}
            nama={item.artists[0].name}
          />
        ))}
    </div>
       
  );
}

export default App;
