import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import './EditPage.css';




class EditPage extends Component {

componentDidUpdate(prevProps) {
  if (this.props.details !== prevProps.details) {
      this.setState({
      case: this.props.details.case,
      event: this.props.details.event,
      due_date: this.props.details.due_date,
      details: this.props.details.details,
      })
    }
}
    state = {
        event: '',
        case: '',
        due_date: '',
        details: '',
        id: this.props.match.params.id 
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
        alert('Enter event, case, date, and details to save')
    } else {
        this.props.dispatch({ type: 'UPDATE_EVENT', payload: this.state })
        this.goBack();
    }
  }

  render() {
    return (
      <div className="center"> Enter information to edit event 
        <div>{JSON.stringify(this.props.details)}</div>
          <div>
            <Input onChange={(event) => this.handleChange(event, 'due_date')} value={this.state.due_date.split('T')[0]}></Input>  
          </div>
          <div>
            <Input onChange={(event) => this.handleChange(event, 'case')} value={this.state.case}></Input>  
          </div>
          <div>
            <Input onChange={(event) => this.handleChange(event, 'event')} value={this.state.event}></Input>  
          </div>
          <div>
            <Input onChange={(event) => this.handleChange(event, 'details')} value={this.state.details}></Input>
          </div>
          <Button color="secondary" variant="contained"onClick={this.goBack}>Cancel <CancelIcon/></Button>
          <Button color="primary" variant="contained" onClick={this.handleSave}>Save changes <SaveAltIcon/></Button>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
    details: state.details
});

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStateToProps)(EditPage));