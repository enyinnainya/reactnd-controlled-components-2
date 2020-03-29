import React, {Component} from 'react';
import FormInputCard from './FormInputCard';
import DeleteItemCard from './DeleteItemCard';
import ItemDisplayCard from './ItemDisplayCard';

class FormCard extends Component{
    state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render(){
    
   return (
   		<div>
     		<h2>Shopping List</h2>
        	<FormInputCard state={this.state} inputIsEmpty={this.inputIsEmpty} handleChange={this.handleChange} addItem={this.addItem}   />
        	<DeleteItemCard deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound} />
        	<ItemDisplayCard state={this.state}/>
		</div>
   ); 
    
  }
  
}

export default FormCard;