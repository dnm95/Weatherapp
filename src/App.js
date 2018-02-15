import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

const cities = [
  'Buenos Aires,ar',
  'Washington DC.,us',
  'Bogota,col',
  'Mexico,mx',
  'Madrid,es',
  'Santiago,cl'
];

class App extends Component {
  handleSelectedLocation = city =>{
    console.log(`handleSelectionLocation ${city}`);
  };

  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title="Weatherapp" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities} 
              onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail"></div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
