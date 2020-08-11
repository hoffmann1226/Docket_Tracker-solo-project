import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import './DetailsPage.css';
import Button from '@material-ui/core/Button';


class DetailsPage extends Component {

goBack =() => this.props.history.push('/home');

  render() {
    return (
        <div className="center">
            <h3> Event: {this.props.details.event}</h3>
            <h3> Case: {this.props.details.case}</h3>
            <h3>Details: {this.props.details.details}</h3>
            <Button color="default" variant="contained" onClick={this.goBack}>Back</Button>
    </div>
)
}
}

const mapStateToProps = (state) => ({
    details: state.details
});

export default withRouter(connect(mapStateToProps)(DetailsPage));