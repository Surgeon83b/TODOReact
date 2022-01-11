import './App.css';
import React from 'react';
import {NewItem} from './Components/NewItem';

function App() {
  return (
    <div className="App">
      <h1>{'<<My TODOReact project>>'}</h1>
      <NewItem />
    </div>
  )
}

export default App;
