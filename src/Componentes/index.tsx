import * as React from 'react';

import Grid from '@mui/material/Grid';
import { Button, List, ListItem, ListItemText, TextField } from '@mui/material';
import { Box } from '@mui/system';

function Apps() {
  const username = React.useRef<HTMLInputElement>(null);
  const email = React.useRef<HTMLInputElement>(null);
  const pass = React.useRef<HTMLInputElement>(null);
  const onSubmite = (event: React.FormEvent) =>{
    event.preventDefault();
    console.log(username.current?.value)
    console.log(email.current?.value)
    console.log(pass.current?.value)
  }
  return (    
  <Grid container>
    <Grid item xs ={8} ml={25}  >
    <form onSubmit ={onSubmite}>
     <Grid item padding={1} >
      <TextField fullWidth  label="nome" inputRef={username}/>
      </Grid>
      <Grid item padding={1} >
      <TextField fullWidth label="E-mail" inputRef={email}/>
      </Grid>
      <Grid item padding={1} >
      <TextField fullWidth label="senha" inputRef={pass}/>
      </Grid>
      <Grid item m={1}>
      <Button type="submit" variant="contained" size="large" >
          Cadestrar
        </Button>
        </Grid>
    </form>
    <List>
      <ListItem>
        <ListItemText primary="carlos" secondary="email">
        </ListItemText>
      </ListItem>
    </List>
    </Grid>
    </Grid>
  )
}
export default Apps;