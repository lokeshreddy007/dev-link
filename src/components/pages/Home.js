import React from "react";
import BoardPreview from "../BoardPreview";

class Home extends React.Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.borads).map(key => (
          <BoardPreview key={key} borad={this.props.borads[key]} />
        ))}
      </div>
    );
  }
}

export default Home;
