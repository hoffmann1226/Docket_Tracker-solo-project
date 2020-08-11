import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import DetailItem from '../DetailItem/DetailItem'




class DetailsItem extends Component {


  render() {
    return (
      <div>
        {this.props.details.map((item, index) => (
                    <DetailItem key={index} item={item}/>
                )) }
          {/* <h3> Event: {this.props.item.event}</h3>
            <h3> Case: {this.props.item.case}</h3>
            <h3>Details: {this.props.item.details}</h3> */}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  state
});


export default withRouter(connect(mapStateToProps)(DetailsItem));