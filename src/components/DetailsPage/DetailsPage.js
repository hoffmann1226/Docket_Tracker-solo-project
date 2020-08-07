import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class DetailsPage extends Component {

goBack =() => this.props.history.push('/info');

  render() {
    return (
      <div> Details
       
       <button onClick={this.goBack}>Back</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    state
});

export default withRouter(connect(mapStateToProps)(DetailsPage));