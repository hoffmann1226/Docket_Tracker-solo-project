import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from "../LogOutButton/LogOutButton";


class UserPage extends Component {

  componentDidMount () {
    this.props.dispatch({type: 'FETCH_DOCKET'})
  }

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <h3 id="welcome">Welcome, {this.props.user.username}!</h3>
        <p>Your ID is: {this.props.user.id}</p>
        {JSON.stringify(this.props.docket)}


        <LogOutButton className="log-in" />
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
