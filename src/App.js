import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';
import data from './components/data';

class App extends Component {
  state = {
    data,
    input: ''
  };

  inputChangeHandler = e => {
    this.setState({input: e.target.value})
  };

  render() {
    const filterBand = this.state.data.filter(bandSearched => {
      return bandSearched.name.toLowerCase().includes(this.state.input.toLowerCase());
    });
    return (
      <div className="App">
        <h1 className="title">Find it.</h1>
        <Search searchChange={this.inputChangeHandler} />
        <CardList data={filterBand} />
      </div>
    );
  }
}

export default App;
