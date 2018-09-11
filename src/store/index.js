import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeSetup(
    applyMiddleware(sagaMiddleware, logger),
  )
)

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export {
  store as default,
  persistor
}