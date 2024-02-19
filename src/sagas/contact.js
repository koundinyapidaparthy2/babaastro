// sagas/counterSaga.js
import { put, call, takeEvery } from "redux-saga/effects";
import { CONTACT_ACTION } from "actions";
import { enqueueSnackbar } from "notistack";
// Worker saga
function* handleContactFunAsync({ payload }) {
  console.log({ payload });
  try {
    enqueueSnackbar("Contact detials send", { variant: "success" });
    yield put({
      type: CONTACT_ACTION.SUCCESS,
    });
  } catch (e) {
    enqueueSnackbar(e.message, { variant: "error" });
    yield put({ type: CONTACT_ACTION.ERROR, error: { message: e.message } });
  }
}

// Watcher saga
export default function* contactSagaAsync() {
  yield takeEvery(CONTACT_ACTION.PENDING, handleContactFunAsync);
}
