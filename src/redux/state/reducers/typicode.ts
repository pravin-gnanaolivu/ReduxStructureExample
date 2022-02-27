import { ActionType } from "../action-types/typicode"
import { TypicodeActions } from "../actions/typicodeActions"

interface TypicodeState {
	data: Object
	error: null
	loading: boolean
}

const initialState = {
	data: {},
	error: null,
	loading: false,
}

export const typicodeReducer = (
	state: TypicodeState = initialState,
	action: TypicodeActions
) => {
	switch (action.type) {
		case ActionType.GET_TYPICODE_ALBUM:
			return { data: {}, error: null, loading: true }
		case ActionType.GET_TYPICODE_ALBUM_SUCCESS:
			return { data: action.payload, error: null, loading: false }
		case ActionType.GET_TYPICODE_ALBUM_ERROR:
			return { data: {}, error: action.payload, loading: false }
		default:
			return state
	}
}
