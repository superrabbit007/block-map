import React , {Component} from 'react';
import './App.css';

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

	render() {
		console.log(this.props.navBar);
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
						<button className="filter">Filter</button>
					</div>
				</div>
			</nav>
		)
	}
}

export default Nav;
//t