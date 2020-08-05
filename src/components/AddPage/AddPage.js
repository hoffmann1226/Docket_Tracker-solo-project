import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddPage extends Component {

state = {
    event: '',
    case: '',
    due_date: '',
    details: '',
    user_id: this.props.user.id

}

goBack =() => this.props.history.push('/info');

handleChange = (event, input) => {
    this.setState({
            ...this.state,
            [input]: event.target.value
    })
    console.log(this.state)
}

handleSave = () => {
    if (this.state.event === '' || this.state.case === '' || this.state.due_date === '' || this.state.details === '') {
        alert('Enter title and description to save')
    } else {
        this.props.dispatch({ type: 'ADD_EVENT', payload: this.state })
        this.goBack();
    }
  }

  render() {
    return (
      <div> Enter information to add an event to the docket
          <div>
            <input onChange={(event) => this.handleChange(event, 'event')} placeholder="event"></input>  
          </div>
          <div>
            <input onChange={(event) => this.handleChange(event, 'case')} placeholder="case"></input>  
          </div>
          <div>
            <input onChange={(event) => this.handleChange(event, 'due_date')}placeholder="date (YYYY-MM-DD)"></input>  
          </div>
          <div>
            <input onChange={(event) => this.handleChange(event, 'details')}placeholder="details"></input>
          </div>
           <button onClick={this.goBack}>Back</button>
           <button onClick={this.handleSave}>Confirm Add</button>
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
export default connect(mapStateToProps)(AddPage);