import { ActionType } from "../../action-types"

interface searchRepositoriesAction {
	type: ActionType.SEARCH_REPOSITORIES
}

interface searchRepositoriesSuccessAction {
	type: ActionType.SEARCH_REPOSITORIES_SUCCESS
	payload: string[]
}

interface searchRepositoriesErrorAction {
	type: ActionType.SEARCH_REPOSITORIES_ERROR
	payload: string
}

export type RepositoriesActions =
	| searchRepositoriesAction
	| searchRepositoriesSuccessAction
	| searchRepositoriesErrorAction
