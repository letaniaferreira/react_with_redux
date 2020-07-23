import React from "react";

class SearchBar extends React.Component {
    state = {searchterm: ''};

    onInputChange = event => {
        this.setState({searchterm: event.target.value });
    };

    onFormSubmit = event => {
        // This prevents the page from refreshing upon searchbar submission
        event.preventDefault();
        // todo make sure to call callback from parent component
    };


    render(){
        return(
            <div className="search-bar ui segment">
                <form onsubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.searchterm}
                            onChange={this.onInputChange}
                       />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
