
import axios from 'axios';
import { takeEvery, put} from 'redux-saga/effects';


function* getDetails( action ){
    console.log('in getDetails!')
    try{
        yield axios.get('/api/docket/' + action.payload);
        yield put({type: 'SET_DOCKET'});
    }catch (error){
      console.log('error with docket delete request', error);
    }
  }

  function* detailsSaga() {
    yield takeEvery('GET_DETAILS', getDetails );
  }

export default detailsSaga;