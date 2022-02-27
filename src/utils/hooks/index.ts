import { useEffect, useState } from "react"
import _ from "lodash"

export const useClonedStateWithAutoUpdate = (initialState: any) => {
	const [state, setState] = useState(initialState)
	useEffect(() => {
		if (!_.isEqual(state, initialState)) {
			setState(initialState)
		}
	}, [initialState])
	return [_.cloneDeep(state), setState]
}
