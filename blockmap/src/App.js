import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {GoogleApiWrapper, Map} from 'google-maps-react';
import Menu from './Menu';
// import Main from './Main';
import Nav from './Nav';
import MapContainer from './MapContainer';

const style = {  
  width: '100%',
  height: '100%',
  position: 'absolute'
};

// const center ={
//                 lat: 22.543096, 
//                 lng: 114.05786499999999
//               }



class App extends Component {
  state={
    showingNav: false,
    center :{
                lat: 22.543096, 
                lng: 114.05786499999999},

    marker: {}
  }

  showingNav(show) {
    if(!this.state.showingNav) {
      this.setState({
        showingNav: true
      }) 
    }else {
      this.setState({showingNav: false})
    }
  }

  mapChange(local) {
    console.log(local);
    if(local!== this.state.center) {
      this.setState({
        center: local
      })
    }
  }

  // setMarker(loc) {
  //   console.log(loc);
  //   this.setState({marker: loc})
  // }


  render() {
    
    return (
      <div id="container">
        <Nav 
          navBar={this.state.showingNav}
          mapCenter={this.state.center}
          google={window.google}
          changeMapCenter={(local)=>this.mapChange(local)}
          setMarker={(loc)=>this.setMarker(loc)}
          />
        <div className="main">
          <Menu
            navChange={(show)=>this.showingNav(show)}/>
          <div className="map">
              <MapContainer
               center={this.state.center}
               />
          </div>
          <div id="secondComponent"></div>
        </div>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAbUCvFRJ7Q68Y1fvtm1eW5zfaQsqT6FTk'
})(App);
//dl