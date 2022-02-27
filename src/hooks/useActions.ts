import { bindActionCreators } from "redux"
import { useDispatch } from "react-redux"
import { actionCreators } from "../redux/state"

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actionCreators, dispatch)
}
