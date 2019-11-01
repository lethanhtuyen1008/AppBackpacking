import { all, takeLatest, call, put, fork, delay } from "redux-saga/effects";
import * as Types from '../constants';
import { getToursListSuccess } from "../actions";
import { getTourListFromApi } from "./api";

function* onGetToursList() {
  try {
    yield delay(500, true);
    const response = yield call(getTourListFromApi);
    //console.log(response.data.data);
    yield put(getToursListSuccess(response.data.data));
    yield put(hideLoader())
  } catch (error) {
    console.log("List Tours", error);
  }
}

function* watchOnGetToursList() {
  yield takeLatest(Types.GET_TOURS_LIST, onGetToursList);
}

export default function* rootSaga() {
  yield all([
    fork(watchOnGetToursList)
  ]);
}
