import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';



class SearchItem extends Component {


  render() {
    return (
        <TableRow>
            <TableCell>{this.props.item.case}</TableCell>
            <TableCell>{this.props.item.event}</TableCell>
            <TableCell>{this.props.item.due_date.split('T')[0]}</TableCell>
            <TableCell>{this.props.item.details}</TableCell>
        </TableRow>      
    );
  }
}


const mapStateToProps = (state) => ({
  state
});


export default withRouter(connect(mapStateToProps)(SearchItem));