import React, { Component } from 'react';
import DocketList from "../DocketList/DocketList";
import { connect } from 'react-redux';

class InfoPage extends Component {

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

// If you needed to add local state or other things,
// you can make it a class component like:

/*
class InfoPage extends React.Component {

  render() {
    return (
      <div>
        <p>Info Page</p>
      </div>
    )
  }
}
*/
const mapStateToProps = (state) => ({
  state
});


export default connect(mapStateToProps)(InfoPage);
