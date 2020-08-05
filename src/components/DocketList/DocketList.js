import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocketItem from '../DocketItem/DocketItem';


class DocketList extends Component {

componentDidMount () {
    this.props.dispatch({type: 'FETCH_DOCKET'})
  }

  render() {
    return (
      <div>
          <table>
            <thead>
                <tr>
                    <th>Event</th>
                    <th>Case</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {/* {JSON.stringify(this.props.docket)} */}
                {this.props.docket.map((item, index) => (
                    <DocketItem item={item}/>
                )) }
            </tbody>
           </table>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  docket: state.docket
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DocketList);