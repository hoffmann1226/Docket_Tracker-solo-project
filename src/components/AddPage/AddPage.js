import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddPage extends Component {

goBack =() => this.props.history.push('/info')

  render() {
    return (
      <div> Add Page
           <button onClick={this.goBack}>Back</button>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  docket: state.docket
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AddPage);