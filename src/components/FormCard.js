import React, {Component} from 'react';
import FormInputCard from './FormInputCard';
import DeleteItemCard from './DeleteItemCard';
import ItemDisplayCard from './ItemDisplayCard';
import PropTypes from 'prop-types';

class FormCard extends Component{
    state = {
    value: ''
  };

	static  propTypes={
        state: PropTypes.object.isRequired,
        addItem: PropTypes.func.isRequired,
        deleteLastItem: PropTypes.func.isRequired,
        noItemsFound: PropTypes.func.isRequired
    }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };


  inputIsEmpty = () => {
    return this.state.value === '';
  };

  render(){
    const {noItemsFound,deleteLastItem,state,addItem}=this.props;
   return (
   		<div>
     		<h2>Shopping List</h2>
        	<FormInputCard state={this.state} inputIsEmpty={this.inputIsEmpty} handleChange={this.handleChange} addItem={addItem}   />
        	<DeleteItemCard deleteLastItem={deleteLastItem} noItemsFound={noItemsFound} />
        	<ItemDisplayCard state={state}/>
		</div>
   ); 
    
  }
  
}

export default FormCard;