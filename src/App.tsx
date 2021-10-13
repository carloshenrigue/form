import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@material-ui/core';
import Apps from './Componentes';
import { Box } from '@mui/system';

function App() {
  return (
    <Box ml={3} m ={8} >
      <Box  sx={{marginLeft:'35%'}} >
           <Typography variant="h3" >
              Faça seu cadastro
            </Typography>
        </Box>
            <Apps/>
    </Box>
  )
}

export default App;
