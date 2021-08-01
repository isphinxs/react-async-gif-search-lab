import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
    // fetch data from Giphy API, sstore first 3 gifts from the respons in state, pass to child <GifList> as prop
    state = {
        gifList: []
    }

    // componentDidMount() {
    fetchOnSubmit = searchValue => {

        const URL = `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=3&rating=g`;

        fetch(URL)
            .then(resp => resp.json())
            .then(gifs => {
                const gifList = gifs.data.map(gif => gif.images.original.url);
                this.setState({ gifList });
            });
    }

    render() {
        return (
            <div>
                <GifSearch fetchOnSubmit={this.fetchOnSubmit} />
                <GifList gifList={this.state.gifList} />
            </div>
        );
    }
}

export default GifListContainer;