import { ActionType } from "../../action-types/typicode"

interface get_typicode_album_action {
	type: ActionType.GET_TYPICODE_ALBUM
}

interface get_typicode_album_success_action {
	type: ActionType.GET_TYPICODE_ALBUM_SUCCESS
	payload: Object[]
}

interface get_typicode_album_error_action {
	type: ActionType.GET_TYPICODE_ALBUM_ERROR
	payload: string
}

export type TypicodeActions =
	| get_typicode_album_action
	| get_typicode_album_success_action
	| get_typicode_album_error_action
