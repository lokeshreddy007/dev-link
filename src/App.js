import React from "react";
// import Board from "./components/Board";

class App extends React.Component {
  state = {
    boardTitle: "house ideas"
  };
  render() {
    return (
      <div>
        <p>{this.state.boardTitle}</p>
      </div>
    );
  }
}

export default App;
