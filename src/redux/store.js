import { compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

const middleware = [compose(sagaMiddleware)];

export const store = (preloadedState) =>
  configureStore({
    reducer,
    preloadedState,
    middleware,
  });

  const reduxStore = store({});
  sagaMiddleware.run(rootSaga);

export default reduxStore;
