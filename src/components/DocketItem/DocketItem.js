import React, { Component } from 'react';
import { connect } from 'react-redux';



class DocketItem extends Component {

  render() {
    return (
      <tr key={this.props.item.id}>
        <td>{this.props.item.event}</td>
        <td>{this.props.item.case}</td>
        <td>{this.props.item.due_date}</td>
        <td><button>Notes</button></td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
      </tr>
    );
  }
}


const mapStateToProps = (state) => ({
  docket: state.docket
});


export default connect(mapStateToProps)(DocketItem);