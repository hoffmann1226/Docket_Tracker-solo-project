import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class DetailsPage extends Component {

goBack =() => this.props.history.push('/info');

  render() {
    return (
        <div >
        {this.props.details.map(event =>
            <div key={event.id}>
                <h3> Event: {event.event}</h3>
                <h3> Case: {event.case}</h3>
                <h3>Details: {event.details}</h3>
                <button onClick={this.goBack}>Back</button>
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