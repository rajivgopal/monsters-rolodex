import React, { Component } from "react";
import { connect } from "react-redux";

import store from "./redux/store";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import * as actions from "./redux/actions";

class App extends Component {
  componentDidMount() {
    store.dispatch(actions.fetchData());
  }

  render() {
    const { monsters, searchField } = this.props;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeHolder="Search monsters" />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

const s = (state, ownProps) => {
  return {
    monsters: state.monsters,
    searchField: state.searchField
  };
};

export default connect(s)(App);
