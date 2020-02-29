import React from "react";
import Board from "./components/Board";
import data from "./sampleData";

class App extends React.Component {
  state = {
    borads: []
  };

  componentDidMount() {
    this.setState({ borads: data.boards });
  }

  updateState = () => {
    this.setState({ borads: data.boards });
  };
  render() {
    return (
      <div>
        {this.state.borads.map(board => (
          <Board board={board} />
        ))}
      </div>
    );
  }
}

export default App;
