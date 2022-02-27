import { ActionType } from "../action-types"
import { RepositoriesActions } from "../actions"

interface RepositoriesState {
	data: string[]
	loading: boolean
	error: string | null
}

const initialState = {
	data: [],
	loading: false,
	error: null,
}

export const repositoriesReducer = (
	state: RepositoriesState = initialState,
	action: RepositoriesActions
): RepositoriesState => {
	switch (action.type) {
		case ActionType.SEARCH_REPOSITORIES:
			return { data: [], loading: true, error: null }
		case ActionType.SEARCH_REPOSITORIES_SUCCESS:
			return { data: action.payload, loading: false, error: null }
		case ActionType.SEARCH_REPOSITORIES_ERROR:
			return { data: [], loading: false, error: action.payload }
		default:
			return state
	}
}
