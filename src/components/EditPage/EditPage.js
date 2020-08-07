import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class EditPage extends Component {

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
        // this.goBack();
    }
  }

  render() {
    return (
      <div> Enter information to edit an event to the docket
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
            <textarea onChange={(event) => this.handleChange(event, 'details')}placeholder="details"></textarea>
          </div>
           <button onClick={this.goBack}>Return to Info Page</button>
           <button onClick={this.handleSave}>Save changes</button>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
const mapStateToProps = (state) => ({
    docket: state.docket
});

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStateToProps)(EditPage));