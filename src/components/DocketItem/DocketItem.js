import React, { Component } from 'react';
import { connect } from 'react-redux';



class DocketItem extends Component {

handleDelete = (id)=>(event)=>{
console.log('delete clicked, id is', id);
this.props.dispatch({type: 'DELETE_EVENT', payload: id});
}//end handleDelete

  render() {
    return (
      <tr key={this.props.item.id}>
        <td>{this.props.item.event}</td>
        <td>{this.props.item.case}</td>
        <td>{this.props.item.due_date}</td>
        <td><button>Notes</button></td>
        <td><button>Edit</button></td>
        <td><button onClick = {this.handleDelete(this.props.item.id)}>Delete</button></td>
      </tr>
    );
  }
}


const mapStateToProps = (state) => ({
  docket: state.docket
});


export default connect(mapStateToProps)(DocketItem);