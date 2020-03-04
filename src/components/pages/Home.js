import React from "react";
import BoardPreview from "../BoardPreview";
import PropTypes from "prop-types";

class Home extends React.Component {
  newBoard = () => {
    const borad = {
      title: "hello",
      back: "hjjk",
      createdAt: new Date()
    };
    this.props.createNewBoard(borad);
  };
  render() {
    return (
      <div>
        <button onClick={this.newBoard}>New Board</button>
        {Object.keys(this.props.borads).map(key => (
          <BoardPreview key={key} borad={this.props.borads[key]} />
        ))}
      </div>
    );
  }
}

Home.propTypes = {
  borads: PropTypes.array.isRequired,
  createNewBoard: PropTypes.func.isRequired
};

export default Home;
