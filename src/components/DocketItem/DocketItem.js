import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';




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
      <TableRow key={this.props.item.id}>
        <TableCell>{this.props.item.event}</TableCell>
        <TableCell>{this.props.item.case}</TableCell>
        <TableCell>{this.props.item.due_date}</TableCell>
        <TableCell><Button color="default" variant="contained" onClick = {this.goDetails(this.props.item.id)}>Details</Button></TableCell>
        <TableCell><Button color="primary" variant="contained" onClick = {this.goEdit(this.props.item.id)} >Edit</Button></TableCell>
        <TableCell><Button color="secondary" variant="contained" onClick = {this.handleDelete(this.props.item.id)}>Delete</Button></TableCell>
      </TableRow>
    );
  }
}


const mapStateToProps = (state) => ({
  state
});


export default withRouter(connect(mapStateToProps)(DocketItem));