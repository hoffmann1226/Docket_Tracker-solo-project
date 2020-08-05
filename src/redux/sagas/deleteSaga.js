
import axios from 'axios';
import { takeEvery, put} from 'redux-saga/effects';


function* deleteDocket( action ){
    console.log('in deleteDocket!')
    try{
        yield axios.delete('/api/docket/' + action.payload);
        yield put({type: 'FETCH_DOCKET'});
    }catch (error){
      console.log('error with docket delete request', error);
    }
  }

  function* deleteSaga() {
    yield takeEvery('DELETE_EVENT', deleteDocket );
  }

export default deleteSaga;