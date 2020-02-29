import React from "react";
import data from "./sampleData";
import Home from "./components/pages/Home";

class App extends React.Component {
  state = {
    borads: []
  };

  componentDidMount() {
    this.setState({ borads: data.boards });
  }

  render() {
    return (
      <div>
        <Home borads={this.state.borads} />
      </div>
    );
  }
}

export default App;
