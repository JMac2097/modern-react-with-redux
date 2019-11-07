import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';



class App extends React.Component {

	onSearchSubmit(term) {
		axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID b4fb8a8997cb50b08ca238d6a5001c9821614ad716da8b26f27421e4a45612fe'
			}
		});
	}


	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}


export default App;