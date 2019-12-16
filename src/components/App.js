import React from "react";
import SearchBox from "./SearchBox";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = { video: [], selectVideo: null };

  componentDidMount() {
    this.onSearchSubmit("NDTV");
  }

  onSearchSubmit = async inputText => {
    const response = await Youtube.get("/search", {
      params: {
        q: inputText
      }
    });
    console.log(response);
    this.setState({
      video: response.data.items,
      selectVideo: response.data.items[0]
    });
  };
  onVideoSelect = video => {
    this.setState({ selectVideo: video });
    console.log(this.state.selectVideo);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBox onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectVideo} />
            </div>
            <div className="four wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.video}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
