import React, { Component } from 'react';
import './GroceryList.css';

 class GroceryList extends Component {
   constructor(props) {
     super(props);

     this.state = {
       items: [],
       newItem: "",
       purchased: ''
    };

     this.itemsRef = this.props.firebase.database().ref('Items');

   }

   componentDidMount() {
      this.itemsRef.on('child_added', snapshot => {
        const item = snapshot.val();
        item.key = snapshot.key;
        if (!this.props.Item) this.props.setActiveItem(item);
        this.setState({items: this.state.items.concat(item)})
      });
  }

    handleItemChange=(e)=> {
      this.setState({newItem: e.target.value});
    }

    handleSubmit=(e)=> {
      e.preventDefault();
      var newItem = {
        name: this.state.newItem,
        purchased: 'no'
      }
      this.itemsRef.push(newItem);
      this.setState({newItem: ''});
    }

    render() {
      return (
        <div id="item-list-section">
          <div className="align-middle">
          <h1 id="title-tag"> Shared Groceries</h1>
          <button type="button" id="modal-button" data-toggle="modal" data-target="#myModal">New Item</button>
          <div id="myModal" class="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title"></h4>
              </div>
              <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
              <label>
              Items: &nbsp;<br />
              <input type="text" value={this.state.newItem} onChange={this.handleItemChange} required />
              </label>
              <input className="btn btn-default" type="submit" value="Submit" />
              </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
          </div>
        </div>
        <ul className="item-list">
        {this.state.items.map((item) =>
        <div  id="items" onClick={() => this.props.setActiveItem(item)} key={item.key}>{item.name}
        </div>
        )}
        </ul>
        </div>
      );
    }
}

export default GroceryList;
