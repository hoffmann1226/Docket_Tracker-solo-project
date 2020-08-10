import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocketList from "../DocketList/DocketList";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';


class UserPage extends Component {

  state = {
    case: ''
}

  addEvent =() => this.props.history.push('/add')

  searchCase =() => {
    this.props.dispatch({ type: 'SEARCH_CASE', payload: this.state })
  }
  
  handleChange = (event) => {
    this.setState({
            case: event.target.value
    })
    console.log(this.state)
  }



  render() {
    return (
    <div>
      <DocketList/>
      <Button color="default" variant="contained" onClick={this.addEvent}>Add Event <AddIcon/></Button>
      <div>
        <p>Search by case name <Input onChange= {this.handleChange} placeholder="case name"></Input></p>
        <Button color="default" variant="contained" onClick={this.searchCase}>Search</Button>
      </div>
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
