import React from "react";
import "./App.css";
import EmojiResult from "./EmojiResult";
import SearchInput from "./SearchInput";
import filterEmoji from "./filterEmoji";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Emoji Searching</h1>
        <SearchInput onChange={this.handleChange} />
        <EmojiResult filteredEmoji={this.state.filteredEmoji} />
      </div>
    );
  }
}

export default App;
