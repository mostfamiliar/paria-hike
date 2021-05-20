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
    height: 0,
    weather: 0,
    month: 1,
    trail: null
  }

  componentWillMount() {
    this.fetchWater()
    this.fetchTemperature()
  }

  componentDidMount() {
    this.populateMap()
  }

  updateMonth = month => {
    this.setState((state, props) => ({
      month: month
    }), ()=>{
      this.fetchWater()
      this.fetchTemperature()
      console.log(this.state.month)
    });
  }

  populateMap = () => {
    fetch(`http://localhost:5000/trail_routes`)
    .then((response) => response.json())
    .then((results) => {
      this.setState({trail: results.route})
    })
    .catch((error) => {
      this.setState({error: error})
    });
  }

  fetchWater = () => {
    fetch(`http://localhost:5000/streamflow?month=${this.state.month}`)
    .then((response) => response.json())
    .then((results) => {
      this.setState({height: results.water_level})
    })
    .catch((error) => {
      this.setState({error: error})
    });
  }

  fetchTemperature = () => {
    fetch(`http://localhost:5000/temperature?month=${this.state.month}`)
    .then((response) => response.json())
    .then((results) => {
      this.setState({weather: results.temperature})
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
      <Grid item xs={12}>
      <MobileStepper updateMonth={this.updateMonth} />
        <h4>Streamflow by month:</h4 >
        <Gauge data={this.state.height}/>
      </Grid>
        <Grid item xs={12}>
        <br/>
        <h4>Temperature: </h4>
          <Temperature weather={this.state.weather}/>
        </Grid>
        <p>Sources: <a href="https://waterdata.usgs.gov/nwis/uv?site_no=09381800">USGS</a>, <a href="">NOAA</a></p>
      </Grid>
      <Grid item xs={8}>
        <MapContainer trail={this.state.trail} />
      </Grid>
    </Grid>
    </Container>
    )
  };
}

export default App;
