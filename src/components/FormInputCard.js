import React, {Component} from 'react';

class FormInputCard extends Component{
  
  render(){
    
    const {inputIsEmpty,handleChange,addItem} =this.props;
    const {value} =this.props.state;
    
   	return (
    	<form onSubmit={addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={value}
            onChange={handleChange}
          />
          <button disabled={inputIsEmpty()}>Add</button>
        </form>
    ); 
    
  }
  
  
}

export default FormInputCard;