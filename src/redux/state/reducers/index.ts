import { combineReducers } from "redux"
import { repositoriesReducer } from "./repositories"
import { typicodeReducer } from "./typicode"

const reducers = combineReducers({
	repositories: repositoriesReducer,
	typicode: typicodeReducer,
})

export default reducers
export type RootState = ReturnType<typeof reducers>
