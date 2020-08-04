
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


function* fetchDocket(){
    console.log('in getDocket!')
    try{
      const response = yield axios.get('/api/docket');
      console.log('got from server:', response.data)
      yield put({type:'SET_DOCKET', payload: response.data});
    }catch (error){
      console.log('problem getting docket from server', error);
    }
  }

  function* getSaga() {
    yield takeEvery('FETCH_DOCKET', fetchDocket );
  }

export default getSaga;