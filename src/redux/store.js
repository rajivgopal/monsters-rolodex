import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(sagas);

export default store;
