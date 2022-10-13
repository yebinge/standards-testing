import React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import GetAppIcon from '@mui/icons-material/GetApp';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Grid from '@mui/material/Grid';


const Upperarea = () => {
  return (
    <div className='upperarea'>
      <Grid container justifyContent="right" alignItems="baseline">
        <div className='upperarea-button'>
          <Button variant="outlined" color='inherit' size='small' href=''><FileUploadIcon/>Import JSON</Button>
          <Button variant="outlined" color='inherit' size='small' href=''><GetAppIcon/>Export JSON</Button>
        </div>
      </Grid>
    </div>
  );
}

export default Upperarea;