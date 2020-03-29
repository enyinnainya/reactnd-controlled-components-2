import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FormInputCard extends Component{
  
  	static  propTypes={
        addItem: PropTypes.func.isRequired,
        inputIsEmpty: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired
    }
  render(){
    
    const {inputIsEmpty,handleChange,addItem} =this.props;
    const {value} =this.props.state;
    
   	return (
    	<form onSubmit={(event)=>addItem(event,value)}>
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