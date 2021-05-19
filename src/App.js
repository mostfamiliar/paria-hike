import './App.css';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Gauge from './components/gauge';
import MobileStepper from './components/mobileStepper';
import Temperature from './components/temperature';
import MapContainer from './components/mapContainer';

class App extends Component {
  state = {
    height: "",
    month: 1
  }

  componentDidMount() {
    fetch(`http://localhost:5000/water_levels?month=${this.state.month}`)
    .then((response) => response.json())
    .then((results) => {
      this.state.height = results.height
    })
    .catch((error) => {
      this.setState({error: error})
    });
  }

  render() {
    return (
    <Container maxWidth="lg">
    <Grid container spacing={2}>
      <Grid item xs={4} style={{maxHeight: '100vh', overflow: 'auto'}}>
      <h1>Trip data: Backpacking Paria Canyon (White house to Lee's ferry)</h1>
      <h4>Length:</h4>
      <p>31 miles</p>
      <h4>Elevation Change:</h4><p>1000 ft</p>
      <h4>Select Month:</h4 >
      <Grid item xs={12}>
        <MobileStepper />
      </Grid>

        <Grid item xs={12}>
        <h4>Water height:</h4>
          <Gauge data={this.state.height}/>
        </Grid>
        <Grid item xs={12}>
        <h4>Temperature: </h4>
          <Temperature />
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <MapContainer />
      </Grid>
    </Grid>
    </Container>
    )
  };
}

export default App;
