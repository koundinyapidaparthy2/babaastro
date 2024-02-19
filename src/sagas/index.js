import { all, fork } from "redux-saga/effects";
import contactSagaAsync from "./contact"; // Import your sagas

const sagas = [contactSagaAsync];
// Add other sagas as needed
export default function* rootSaga() {
  yield all(sagas.map((eachSaga) => fork(eachSaga)));
}
