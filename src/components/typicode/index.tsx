import { FC, useState, useEffect } from "react"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypeSelector"

const TypicodeComponent: FC = () => {
	const [count, setCount] = useState<number>(1)
	const { getTypicodeAlbumByID } = useActions()
	const { data, error, loading } = useTypedSelector<any>(
		(state) => state.typicode
	)

	useEffect(() => {
		getTypicodeAlbumByID(count)
	}, [count])

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>INCREASE</button>
			<button onClick={() => setCount(count - 1)}>DECREASE</button>
			<div>
				{!error && !loading && <img src={data?.thumbnailUrl} />}
				{loading && <div>...loading</div>}
				{error && <div>{error}</div>}
			</div>
		</div>
	)
}

export default TypicodeComponent
