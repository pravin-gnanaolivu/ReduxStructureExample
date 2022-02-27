import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers"
import logger from "redux-logger"
import { onAppRuns } from "redux/onAppRuns"

export const store = createStore(reducers, {}, applyMiddleware(thunk, logger))

onAppRuns(store)
