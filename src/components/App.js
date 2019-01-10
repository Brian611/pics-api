import React, { Component } from 'react'
import unsplash from "../api/unsplash";

//components
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

export class App extends Component {

    state = {
        images: []
    }

    handleSearchSubmit = async (term) => {
        console.log('term to search: ', term);
        try {
            const { data: { results } } = await unsplash.get('/search/photos', {
                params: { query: term },
            });
            this.setState({ images: results });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.handleSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App
