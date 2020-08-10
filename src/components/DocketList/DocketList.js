import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocketItem from '../DocketItem/DocketItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class DocketList extends Component {

componentDidMount () {
    this.props.dispatch({type: 'FETCH_DOCKET'})
  }

  render() {
    return (
      <div>
          <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Case</TableCell>
                    <TableCell>Event</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {/* {JSON.stringify(this.props.docket)} */}
                {this.props.docket.map((item, index) => (
                    <DocketItem key={index} item={item}/>
                )) }
            </TableBody>
           </Table>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  docket: state.docket
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DocketList);