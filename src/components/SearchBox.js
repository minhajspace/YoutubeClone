import React from "react";

class SearchBox extends React.Component {
  state = {
    inputText: ""
  };

  onInputChange = event => {
    this.setState({ inputText: event.target.value });
    // console.log(this.state.inputText);
  };
  onInputSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.inputText);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onInputSubmit}>
          <div className="filed">
            <label>Video Search </label>
            <input
              type="text"
              value={this.state.inputText}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBox;
