import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import './DetailsPage.css';
import Button from '@material-ui/core/Button';


class DetailsPage extends Component {

goBack =() => this.props.history.push('/home');

  render() {
    return (
        <div >
        {this.props.details.map(event =>
            <div className="center" key={event.id}>
                <h3> Event: {event.event}</h3>
                <h3> Case: {event.case}</h3>
                <h3>Details: {event.details}</h3>
                <Button color="default" variant="contained" onClick={this.goBack}>Back</Button>
            </div>
        )}
    </div>
)
}
}

const mapStateToProps = (state) => ({
    details: state.details
});

export default withRouter(connect(mapStateToProps)(DetailsPage));