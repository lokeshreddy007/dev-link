import React from "react";
import data from "../sampleData";
import List from "./List";

class Board extends React.Component {
  state = {
    currentLists: []
  };

  componentDidMount() {
    this.setState({ currentLists: data.lists });
  }

  createNewList = () => {
    const list = {
      id: Math.random(),
      title: "check",
      boars: 300,
      createdAt: new Date()
    };
    this.setState({ currentLists: [...this.state.currentLists, list] });
  };
  render() {
    return (
      <div className="lists-wrapper">
        <button onClick={this.createNewList}>New List</button>
        {Object.keys(this.state.currentLists).map(key => (
          <List
            key={this.state.currentLists[key].id}
            list={this.state.currentLists[key]}
          />
        ))}
      </div>
    );
  }
}

export default Board;
