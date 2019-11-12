import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

	onSearchSubmit(term) {
		// console.log(term);
		axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID 46267918263db9507b919b1dce011aadb920ba2b66f70a7ab9a194f63bdf5f38'
			}
		});

	}

	render() {
	    return (
	        <div className="ui container" style={{ marginTop: '10px'}}>
	            <SearchBar onSubmit={this.onSearchSubmit} />
	        </div>
	    );
	}
}

export default App;
