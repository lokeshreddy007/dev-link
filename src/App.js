import React from "react";
import data from "./sampleData";
import Home from "./components/pages/Home";
import Board from "./components/Board";

class App extends React.Component {
  state = {
    borads: []
  };

  componentDidMount() {
    this.setState({ borads: data.boards });
  }

  createNewBoard = borad => {
    this.setState({ borads: [...this.state.borads, borad] });
  };
  render() {
    return (
      <div>
        <Home borads={this.state.borads} createNewBoard={this.createNewBoard} />
        <Board />
      </div>
    );
  }
}

export default App;
