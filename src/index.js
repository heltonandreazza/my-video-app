import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAZwh3BG7evVXgCPte72EeebIzrryyKJKg';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      videos: [],
      selectedVideo: null 
    };
    
    YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ 
        videos,
        selectedVideo: videos[0]
      });
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));