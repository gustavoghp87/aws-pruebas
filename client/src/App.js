import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "axios";

function App() {

  const [Data, setData] = useState({datos: []})

  useEffect( () => {
    (async() => {
      const resp = await Axios(`${require('./env.json').server}/api/objects`);
      const datas = resp.data;
      setData({datos: datas.datos})
    })();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          {Data.datos.map( item => (
            <h3 key={item}> {item} </h3>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
