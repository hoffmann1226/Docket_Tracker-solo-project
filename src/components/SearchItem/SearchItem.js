import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';





class SearchItem extends Component {


  render() {
    return (
        <p>{this.props.item.case}, {this.props.item.event_info}, {this.props.item.due_date.split('T')[0]}, {this.props.item.details}</p>
    );
  }
}


const mapStateToProps = (state) => ({
  state
});


export default withRouter(connect(mapStateToProps)(SearchItem));