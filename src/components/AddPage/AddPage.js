import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


class AddPage extends Component {

state = {
    event: '',
    case: '',
    due_date: '',
    details: '',
    user_id: this.props.user.id

}

goBack =() => this.props.history.push('/home');

handleChange = (event, input) => {
    this.setState({
            ...this.state,
            [input]: event.target.value
    })
    console.log(this.state)
}

handleSave = () => {
    if (this.state.event === '' || this.state.case === '' || this.state.due_date === '' || this.state.details === '') {
        alert('Enter event, case, date, and details to add')
    } else {
        this.props.dispatch({ type: 'ADD_EVENT', payload: this.state })
        this.goBack();
    }
  }

  render() {
    return (
      <div> Enter information to add an event to the docket
          <div>
            <Input onChange={(event) => this.handleChange(event, 'due_date')}placeholder="date (YYYY-MM-DD)"></Input>  
          </div>
          <div>
            <Input onChange={(event) => this.handleChange(event, 'case')} placeholder="case"></Input>  
          </div>
          <div>
            <Input onChange={(event) => this.handleChange(event, 'event')} placeholder="event"></Input>  
          </div>
          <div>
          <Input onChange={(event) => this.handleChange(event, 'details')}placeholder="details"></Input>
          </div>
          <Button color="secondary" variant="contained" onClick={this.goBack}>Back</Button>
          <Button color="primary" variant="contained" onClick={this.handleSave}>Confirm Add</Button>
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
export default withRouter(connect(mapStateToProps)(AddPage));