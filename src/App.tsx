import * as React from 'react';
import { Container, Typography } from '@material-ui/core';
import Grid from '@mui/material/Grid';
function App() {
  return (
    <Grid>
       <Grid container>
          <Grid item  alignItems="center">
           <Typography variant="h3" >
              Faça seu cadastro
            </Typography>
          </Grid>
      </Grid>
    </Grid>
  )
}

export default App;
