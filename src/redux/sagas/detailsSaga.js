
import axios from 'axios';
import { takeEvery, put} from 'redux-saga/effects';


function* getDetails( action ){
    console.log('in getDetails!')
    try{
        const response = yield axios.get('/api/docket/' + action.payload);
        console.log('got from server', response.data)
        yield put({type: 'SET_DETAILS', payload: response.data});
    }catch (error){
      console.log('error with details get request', error);
    }
  }

  function* detailsSaga() {
    yield takeEvery('GET_DETAILS', getDetails );
  }

export default detailsSaga;