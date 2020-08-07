import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocketList from "../DocketList/DocketList";


class UserPage extends Component {


  addEvent =() => this.props.history.push('/add')

  render() {
    return (
    <div>
      <DocketList/>
      <button onClick={this.addEvent}>Add Event</button>
    </div>
      );
  }
  }

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  user: state.user,
  docket: state.docket
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
