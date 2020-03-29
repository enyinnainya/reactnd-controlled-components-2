import React, {Component} from 'react';

class DeleteItemCard extends Component{
  
  render(){
    const {noItemsFound,deleteLastItem}=this.props;
    return (
 		<button onClick={deleteLastItem} disabled={noItemsFound()}>
          Delete Last Item
        </button>
    );
           
  }
  
}

export default DeleteItemCard;