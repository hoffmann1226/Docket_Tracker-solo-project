import axios from 'axios';
import { takeEvery, put} from 'redux-saga/effects';


function* searchCase( action ){
    console.log('in searchCases!')
    try{
        const response = yield axios.get('/api/search/' + action.payload);
        console.log('got from server', response.data)
        yield put({type: 'SET_SEARCH', payload: response.data});
    }catch (error){
      console.log('error with search get request', error);
    }
  }

  function* searchSaga() {
    yield takeEvery('SEARCH_CASE', searchCase );
  }

export default searchSaga;