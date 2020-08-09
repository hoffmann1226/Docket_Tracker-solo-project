import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocketList from "../DocketList/DocketList";
import Button from '@material-ui/core/Button';



class UserPage extends Component {


  addEvent =() => this.props.history.push('/add')

  render() {
    return (
    <div>
      <DocketList/>
      <Button color="default" variant="contained" onClick={this.addEvent}>Add Event</Button>
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
