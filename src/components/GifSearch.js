import React, {Component} from 'react';

class GifSearch extends Component {
    state = {
        searchValue: ""
    }

    handleChange = event => {
        this.setState({ searchValue: event.target.value });
        // console.log("Search value: ", this.state.searchValue);
    }

    handleSubmit = event => {
        event.preventDefault();
        // debugger;
        this.props.fetchOnSubmit(this.state.searchValue);
    }

    render() {
        return(
            <form onSubmit={event => this.handleSubmit(event)}>
                <strong>Enter a Search Term:</strong><br/>
                <input 
                    type="text" 
                    onChange={event => this.handleChange(event)}
                /><br />
                <input type="submit" value="Find Gifs"/>
            </form>
        );
    }
}

export default GifSearch;