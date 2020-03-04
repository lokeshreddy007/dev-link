import React from "react";
import PropTypes from "prop-types";

class BoardPreview extends React.Component {
  render() {
    return <div>{this.props.borad.title}</div>;
  }
}

BoardPreview.propTypes = {
  borad: PropTypes.object.isRequired
};

export default BoardPreview;
