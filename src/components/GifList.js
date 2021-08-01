import React, {Component} from 'react';

class GifList extends Component {

    render() {
        const gifs = this.props.gifList.map((gif, index) => <li key={index}><img src={gif} /></li>);
        return (
            <div>
                <ul>
                    {gifs}
                </ul>
            </div>
        );
    }
}

export default GifList;