import React from "react";
import SearchBox from "./SearchBox";
import Youtube from "../apis/Youtube";

class App extends React.Component {
  state = { video: [] };

  onSearchSubmit = async inputText => {
    const response = await Youtube.get("/search", {
      params: {
        q: inputText
      }
    });
    console.log(response);
    this.setState({ video: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBox onSearchSubmit={this.onSearchSubmit} />i have{" "}
        {this.state.video.length} video
      </div>
    );
  }
}
export default App;
