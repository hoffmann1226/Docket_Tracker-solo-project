import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocketList from "../DocketList/DocketList";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';
import SearchItem from '../SearchItem/SearchItem'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import FaSearch from '@material-ui/icons/Search';
import './UserPage.css';



class UserPage extends Component {

  state = {
    case: ''
}

  addEvent =() => this.props.history.push('/add')

  searchCase =() => {
    this.props.dispatch({ type: 'SEARCH_CASE', payload: this.state.case })
  }
  
  handleChange = (event) => {
    this.setState({
            case: event.target.value
    })
    console.log(this.state.case)
  }



  render() {
    return (
    <div>
      <h3>Hello, {this.props.user.username}! Here's what's on your docket:</h3>
      <DocketList/>
      <Button color="default" variant="contained" onClick={this.addEvent}>Add Event <AddIcon/></Button>
      <div className="center">
        <p>Search docket by case: <Input onChange= {this.handleChange} placeholder="case name"></Input><Button color="default" variant="contained" onClick={this.searchCase}>Search <FaSearch/></Button></p>
      </div>
      <div>
        <Table>
          <TableBody>
            {this.props.search.map((item, index) => (
                    <SearchItem key={index} item={item}/>
            )) }  
          </TableBody>
        </Table>
      </div>
    </div>
      );
  }
  }

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
  search: state.search,
  user: state.user
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
