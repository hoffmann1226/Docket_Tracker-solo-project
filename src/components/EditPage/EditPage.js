import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditPage extends Component {

  render() {
    return (
      <div> Enter information to add an event to the docket
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
    docket: state.docket
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EditPage);