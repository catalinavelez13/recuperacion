import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CustomizedDialogs from './CustomizedDialogs';


const card = (
  <React.Fragment >
    <CardContent >
      <Typography variant="h5" component="div">
        Informacion de contacto
      </Typography>
      <Typography variant="body2">
        Si deseas saber mas sobre mi y quieres contactarte conmigo ¡puedes hacerlo por aquí!
        <br />
      </Typography>
    </CardContent>
    <CardActions >
      <CustomizedDialogs/>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className='card'>{card}</Card>
    </Box>
  );
}
