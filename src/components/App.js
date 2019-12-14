import React from "react";
import SearchBox from "./SearchBox";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { video: [], selectVideo: null };

  onSearchSubmit = async inputText => {
    const response = await Youtube.get("/search", {
      params: {
        q: inputText
      }
    });
    console.log(response);
    this.setState({ video: response.data.items });
  };
  onVideoSelect = video => {
    this.setState({ selectVideo: video });
    console.log(this.state.selectVideo);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBox onSearchSubmit={this.onSearchSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.video}
        />
      </div>
    );
  }
}
export default App;
