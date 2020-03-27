import React from "react";
import propTypes from "prop-types";
import EmojiRow from "./EmojiRow";
import "./EmojiResult.scss";

class EmojiResult extends React.Component {
  render() {
    return (
      <div className="emoji-list-wrapper">
        {this.props.filteredEmoji &&
          this.props.filteredEmoji.map((emoji, index) => {
            return (
              <>
                <EmojiRow
                  key={index}
                  title={emoji.title}
                  symbol={emoji.symbol}
                  keywords={emoji.keywords}
                />
              </>
            );
          })}
      </div>
    );
  }
}
EmojiResult.propTypes = {
  filteredEmoji: propTypes.array.isRequired
};

export default EmojiResult;
