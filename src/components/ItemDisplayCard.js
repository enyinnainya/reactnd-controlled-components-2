import React, {Component} from 'react';

class ItemDisplayCard extends Component{
  
  render(){
    const {items} =this.props.state;
    return (
      	<div>
          <p className="items">Items</p>
          <ol className="item-list">
            {items.map((item, index) => <li key={index}>{item}</li>)}
          </ol>
    	</div>
    );
  }
  
}

export default ItemDisplayCard;