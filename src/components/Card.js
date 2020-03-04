import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  render() {
    return <p>Card</p>;
  }
}

Card.propTypes = {
  data: PropTypes.object.isRequired
};
export default Card;
