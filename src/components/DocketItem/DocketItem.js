import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';




class DocketItem extends Component {

handleDelete = (id)=>(event)=>{
console.log('delete clicked, id is', id);
this.props.dispatch({type: 'DELETE_EVENT', payload: id});
}//end handleDelete

goEdit = (id) => (event)=> {
  console.log('edit clicked, id is', id) 
  this.props.history.push('/edit/' + id) 
}

goDetails = (id) => (event)=> {
  console.log('details clicked, id is', id)
  this.props.dispatch({type: 'GET_DETAILS', payload: id}) 
  this.props.history.push('/details/') 
}
  render() {
    return (
      <tr key={this.props.item.id}>
        <td>{this.props.item.event}</td>
        <td>{this.props.item.case}</td>
        <td>{this.props.item.due_date}</td>
        <td><button onClick = {this.goDetails(this.props.item.id)}>Details</button></td>
        <td><button onClick = {this.goEdit(this.props.item.id)} >Edit</button></td>
        <td><button onClick = {this.handleDelete(this.props.item.id)}>Delete</button></td>
      </tr>
    );
  }
}


const mapStateToProps = (state) => ({
  state
});


export default withRouter(connect(mapStateToProps)(DocketItem));