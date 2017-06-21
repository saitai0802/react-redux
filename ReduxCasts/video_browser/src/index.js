// In this example. Every state are component level state (Localized for a component)!
// Redux is application level state! We will take about it later.


import _ from "lodash";
// 點解要成條path 寫哂? 因為bable 會認得react, react-dom 用npm install 既package
// 而且我地既compoent js 未必係獨一無二
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null  // Current selected video
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    //   YTSearch({ key: API_KEY, term: term }, function(videos) => {  Version 1 - Old way
    //   YTSearch({ key: API_KEY, term: term }, (videos) => { Version 2 - Arrow function
    YTSearch({ key: API_KEY, term: term }, videos => { // ES6 systnax
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  // Step 1: this.state = {videos: [], selectedVideo: null };
  // Step 2: render() ===> Show loading;
  // Step 3: Ajax has finished calling, this.state = {videos: videos, selectedVideo: videos[0] };
  render() {
    // throttling searching input change
    // lodash.debounce: Delay a few seconds
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    // Version 1: onSearchTermChange={term => this.videoSearch(term)}
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
