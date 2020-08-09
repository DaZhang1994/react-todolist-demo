import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST, setList } from "./actions";

function* getInitList() {
  const res = yield fetch("http://localhost:3000/list.json");
  const { list } = yield res.json();
  if(list) {
    yield put(setList(list));
  }
}

export default function* todoListSaga(): any {
  yield takeEvery([GET_INIT_LIST], getInitList);
}
