import React, { Component } from 'react';
import { connect } from 'react-redux';



class DocketItem extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.item.event}</td>
        <td>{this.props.item.case}</td>
        <td>{this.props.item.due_date}</td>
        <td><button>Details</button></td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
      </tr>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  docket: state.docket
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DocketItem);