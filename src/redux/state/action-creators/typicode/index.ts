import { Dispatch } from "redux"
import { TypicodeActions } from "../../actions"
import axios from "axios"
import { ActionType } from "redux/state/action-types/typicode"

export const getTypicodeAlbumByID = (id: number) => {
	return async (dispatch: Dispatch<TypicodeActions>) => {
		dispatch({
			type: ActionType.GET_TYPICODE_ALBUM,
		})
		try {
			const { data } = await axios.get(
				`https://jsonplaceholder.typicode.com/photos/${id}`
			)
			dispatch({
				type: ActionType.GET_TYPICODE_ALBUM_SUCCESS,
				payload: data,
			})
		} catch (err: any) {
			dispatch({
				type: ActionType.GET_TYPICODE_ALBUM_ERROR,
				payload: err.message,
			})
		}
	}
}
