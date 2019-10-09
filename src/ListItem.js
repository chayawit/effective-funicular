import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
	super(props);
	this.state = { isDone: false };
    }

    handleClick() {
      this.setState( {isDone: !this.state.isDone } )
    }

  render() {
    var item = this.props.item;
    var name = item.name;
    var color = this.state.isDone ? 'grey' : 'black';

    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: color}}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

