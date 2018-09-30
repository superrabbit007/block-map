import React , {Component} from 'react';
import './App.css';
import {GoogleApiWrapper, Map} from 'google-maps-react';
import {GoogleApi} from 'google-maps-react'

class Nav extends Component {

	state={
		currentNav:'nav',
		query: ''
	};
	updateQuery(query) {
		// if(query.trim()!=='') {
		// 	this.setState({value: query.trim()})
		// }
	}

	// geocodeAddress(google,geocoder, resultsMap) {
 //        var address = document.getElementById('searchBox').value;

 //        geocoder.geocode({'address': address}, function(results, status) {
 //          if (status === google.maps.GeocoderStatus.OK) {
 //            resultsMap.setCenter(results[0].geometry.location);
 //            //TODO: Insert code here to take the first result's formatted address, and LOCATION.
 //            var marker = new google.maps.Marker({
 //              map: resultsMap,
 //              position: results[0].geometry.location
 //            });
 //            results[0].formatted_address; // PUT STUFF HERE 
 //            results[0].geometry.location; // PUT STUFF HERE
 //          } else {
 //            alert('Geocode was not successful for the following reason: ' + status);
 //          }
 //        });
 //      }

	render() {
		console.log(this.props.navBar);
		console.log(this.props.google);
		var google=this.props.google;

        var geocoder = new google.maps.Geocoder();


		return(
			<nav className={this.props.navBar? 'navOpen' : 'nav'}>
				<div>
					<h2>ShenZhen Locations</h2>
					<div id="searchBox">
						<input 
							type="text" 
							value={this.state.query}
							placeholder="Station location"
							onChange={(event)=>this.updateQuery(event.target.value)}/>
						<button className="filter" onClick={(e)=>this.geocodeAddress(google,geocoder,this.props.mapCenter)}>Filter</button>
					</div>
				</div>
			</nav>
		)
	}
}

//t
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAbUCvFRJ7Q68Y1fvtm1eW5zfaQsqT6FTk'
})(Nav);