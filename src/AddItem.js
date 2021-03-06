import React, { Component } from 'react';

class AddItem extends Component {

  constructor() {
    super();
    this.state = {
      newItem:{}
    }
  }

  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

      // Implement the rest of this function here!
      console.log("Adding new item:", this.refs.id.value)
      this.setState({list: this.props.idName, newItem: this.refs.id.value}, function() {
        this.props.addItem(this.state);
      });
      document.getElementById("addItemForm").reset();
  }


  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
      <h4>Add {this.props.idName}</h4>
      <form ref='form' id="addItemForm" onSubmit={this.handleSubmit.bind(this)}>
      <div id={divName} ref={divName}>
        <label>Name</label><br />
        <input type='text' ref='id' />
        </div>
        <br />
        <input type='submit' value='Submit' />
        <br />
      </form>
      </div>
    );
  }

}

export default AddItem;
