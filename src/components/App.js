import React from "react";
import SearchBox from "./SearchBox";
import Youtube from "../apis/Youtube";
class App extends React.Component {
  onSearchSubmit = inputText => {
    console.log(inputText);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBox onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
export default App;
