import { fork, all } from 'redux-saga/effects'

import watchPhong from './phong'


export default function* rootSaga() {
  yield all([
    fork(watchPhong),
  ])
}