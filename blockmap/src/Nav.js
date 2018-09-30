import React , {Component} from 'react';
import './App.css';
import {GoogleApiWrapper, Map} from 'google-maps-react';
import {GoogleApi} from 'google-maps-react'

class Nav extends Component {

	state={
		query: '',
		location: [],
	};
	updateQuery(query) {
		this.setState({query: query});
		if(query.trim()!=='') {
			// this.setState({value: query.trim()})
			console.log('query is not none');
		}
	}

	// geocodeAddress(google,geocoder, resultsMap) {
	// 	console.log(this.props);
	// 	var self = this.props;
	// 	var ll=this.state.location;
	// 	console.log(self);
 //        var address = document.getElementById('address').value;

 //        geocoder.geocode({'address': address}, function(results, status) {
 //          if (status === google.maps.GeocoderStatus.OK) {
 //          	console.log(results[0]);
 //          	self.changeMapCenter(results[0].geometry.location);
          	
 //          	ll[this.state.i]=results[0];
 //          	this.setState({i: this.state.i+1,
 //          		location: ll
 //          	});

 //          	this.props.locationList(ll);

 //            // var marker = new google.maps.Marker({
 //            //   map: resultsMap,
 //            //   position: results[0].geometry.location
 //            // });
 //            // self.setMarker(results[0]);
 //            // results[0].formatted_address; 
 //            // results[0].geometry.location; 
 //            document.getElementById('secondComponent').innerHTML="The Location is" + 
 //            results[0].geometry.location;
 //          } else {
 //            alert('Geocode was not successful for the following reason: ' + status);
 //          }
 //        });
 //      }

	render() {
		console.log(this.props.navBar);
		// console.log(this.props.google);
		var google=this.props.google;

        var geocoder = new google.maps.Geocoder();


		return(
			<nav className={this.props.navBar? 'navOpen' : 'nav'}>
				<div>
					<h2>ShenZhen Locations</h2>
					<div id="searchBox">
						<input
							id="address"
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