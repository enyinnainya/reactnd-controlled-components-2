import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormCard from './components/FormCard';

class App extends React.Component {

	state={
    items: []
    }
  
addItem = (event,value) => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, value],
    }));
  };


  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <FormCard deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound} addItem={this.addItem} state={this.state} />
    
      </div>
    );
  }
}

export default App;
