import axios from 'axios';
import { takeEvery, put} from 'redux-saga/effects';


function* addDocket( action ){
    console.log('in addDocket!')
    try{
        yield axios.post('/api/docket', action.payload);
        yield put({type: 'FETCH_DOCKET'});
    }catch (error){
      console.log('error with post request', error);
    }
  }

  function* postSaga() {
    yield takeEvery('ADD_EVENT', addDocket );
  }

export default postSaga;