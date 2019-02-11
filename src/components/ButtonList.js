import React, { Component } from 'react';
import './ButtonList.css';

class ButtonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
    };

  }

  handleEdit=(e)=> {
    var item = this.props.currentItem.key;
    this.props.firebase.database().ref('Items').ref.child(item).update({name: this.state.newItem});
  }

  handleMarkAsPurchased=(e)=> {
    var item = this.props.currentItem.key;
    this.props.firebase.database().ref('Items').ref.child(item).update({name: this.props.currentItem.name, purchased: 'yes'});
  }

  handleUnmarkAsPurchased=(e)=> {
    var item = this.props.currentItem.key;
    this.props.firebase.database().ref('Items').ref.child(item).update({name: this.props.currentItem.name, purchased: 'no'});
  }

  handleAddItemForEdit=(e)=> {
    this.setState({newItem: e.target.value})
  }

  handleDelete=(e)=> {
    var item = this.props.currentItem.key;
    this.props.firebase.database().ref('Items').ref.child(item).remove();
  }

    render() {
      return (
        <section id="button-list-section">
          <h1>Item Selected: <font color="blue">{this.props.currentItem.name}</font></h1>
          <div>
            <button type="button" data-toggle="modal" data-target="#editModal">Edit Name</button>
            <div id="editModal" class="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title"></h4>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={this.handleEdit}>
                      <input type="text" value={this.state.newItem} onChange={this.handleAddItemForEdit} required />
                      <input className="btn btn-default" type="submit" value="Submit" />
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={this.handleMarkAsPurchased} type="button">Mark As Purchased</button>
            <button onClick={this.handleUnmarkAsPurchased} type="button">Unmark as Purchased</button>
            <button onClick={this.handleDelete} type="button">Delete</button>
          </div>
        </section>
      )
    }
  }

export default ButtonList;
