import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

import actionTypes from "./actionTypes";
import * as actions from "./actions";

function* callFetchData() {
  try {
    const response = yield call(
      axios,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put(actions.fetchDataSuccess(response.data));
  } catch (err) {
    yield put(actions.fetchDataFailed(err));
  }
}

export default function*() {
  yield takeLatest(actionTypes.FETCH_DATA, callFetchData);
}
