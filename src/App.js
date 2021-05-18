import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Gauge from './components/gauge'
import MobileStepper from './components/mobileStepper'
import Temperature from './components/temperature'
import MapContainer from './components/mapContainer'

function App() {
  return (
    <Container maxWidth="lg">
    <Grid container spacing={3}>
      <Grid item xs={4}>
      <header>Trip data: Backpacking Paria Canyon (White house to Lee's ferry)</header>
      <p>Length: sfdasda</p>
      <p>Elevation gain</p>
        <Grid item xs={4}>
          <Gauge />
        </Grid>
        <Grid item xs={4}>
          <Temperature />
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <MapContainer />
      </Grid>
    </Grid>
    </Container>
  );
}

export default App;
