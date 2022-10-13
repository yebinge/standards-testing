import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Upperarea from './Components/Upperarea';
import Grid from '@mui/material/Grid';


function App() {
  return (
    <div className="App">
      <div id='sidebar'><Sidebar /></div>
      <Grid container justifyContent="right"><Upperarea /></Grid>
    </div>
  );
}

export default App;
