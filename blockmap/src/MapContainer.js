import React, {Component} from 'react';
import {Map, InfoWindow, Marker} from 'google-maps-react';
import {GoogleApiWrapper} from 'google-maps-react';


const style = {  
  width: '100%',
  height: '100%',
  position: 'absolute'
};


class MapContainer extends Component {

	state= {
		showingInfoWindow:false,
		activeMarker:{},
		selectedPlace:{}
	};
	

	onMouseoverMarker() {

	};


	onMarkerClick(props,marker,e) {
		console.log(props);
		// this.setState({
		// 	selectedPlace: props,
		// 	activeMarker: marker,
		// 	showingInfoWindow:true
		// });
	};

	onMapClick() {
		console.log(this.state);
		// if(this.state.showingInfoWindow){
		// 	this.setState({
		// 		showingInfoWindow: false,
		// 		activeMarker: null
		// 	});
		// }
	}

	render() {

		var locations=[
		{title:'深圳红树湾', location:{lat: 22.53056, lng: 113.96632799999998}},
		{title:'欢乐谷', location: {lat: 22.533468, lng: 113.99344819999999}},
		{title:'深圳白石洲华侨城', location: {lat: 22.533583, lng: 113.96849799999995}},
		{title:'深圳市盐田区大梅沙东部华侨城', location:{lat:22.631358 ,lng:114.28218500000003 }}];
		var bounds = new this.props.google.maps.LatLngBounds();
		for (var i = 0; i < locations.length; i++) {
		  bounds.extend(locations[i].location);
		}
		return (
			<Map
				onClick={this.onMapClick} 
	            google={this.props.google}
	            zoom={14}
	            style={style}
	            initialCenter={this.props.center}
	            bounds={bounds}>

				{locations.map((loc,index)=>( 
	            	<Marker	
	            		key={index}
	            		title={loc.title}
	            		position={loc.location}
	            		onClick={this.onMarkerClick}
	            	/>
	            		// onMouseoverMarker={this.onMouseoverMarker}/>
	            ))}
	            <InfoWindow
	            	marker={this.state.activeMarker}
	            	visible={this.state.showingInfoWindow}>
	            	<div>
	            		<h2>{this.state.selectedPlace.title}</h2>
	            	</div> 
	            </InfoWindow>     

	        </Map>
	       
		)
		
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAbUCvFRJ7Q68Y1fvtm1eW5zfaQsqT6FTk'
})(MapContainer);
