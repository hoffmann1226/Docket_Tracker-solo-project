
import axios from 'axios';
import { takeEvery, put} from 'redux-saga/effects';


function* updateDocket( action ){
    console.log('in updateDocket!', action.payload)
    try{
        yield axios.put('/api/docket/' + action.payload.id, {case: action.payload.case, event: action.payload.event, due_date: action.payload.due_date, details: action.payload.details });
        yield put({type: 'FETCH_DOCKET'});
    }catch (error){
      console.log('error with docket put request', error);
    }
  }

  function* updateSaga() {
    yield takeEvery('UPDATE_EVENT', updateDocket );
  }

export default updateSaga;