import React from "react";
import propTypes from "prop-types";
import "./EmojiRow.scss";

const EmojiRow = ({ symbol, title }) => {
  return (
    <div className="item-wrapper">
      <div className="item-top">
        <h2>{symbol}</h2>
      </div>
      <div className="item-bottom">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default EmojiRow;

EmojiRow.propTypes = {
  symbol: propTypes.string.isRequired,
  title: propTypes.string.isRequired
};
