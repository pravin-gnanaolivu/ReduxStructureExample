import axios from "axios"
import { Dispatch } from "redux"
import { ActionType } from "../../action-types"
import { RepositoriesActions } from "../../actions"

export const searchRepositories = (term: string) => {
	return async (dispatch: Dispatch<RepositoriesActions>) => {
		dispatch({
			type: ActionType.SEARCH_REPOSITORIES,
		})
		try {
			const { data } = await axios.get(
				"https://registry.npmjs.org/-/v1/search",
				{
					params: {
						text: term,
					},
				}
			)
			const results = data.objects.map((result: any) => {
				return result.package.name
			})
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
				payload: results,
			})
		} catch (err: any) {
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_ERROR,
				payload: err.message,
			})
		}
	}
}
