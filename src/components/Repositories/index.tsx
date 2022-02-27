import { FC, useState } from "react"
import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypeSelector"
import { useClonedStateWithAutoUpdate } from "utils/hooks"

const RepositoriesComponent: FC = () => {
	const [term, setTerm] = useState<string>("")
	const { searchRepositories } = useActions()
	const { data, error, loading } = useTypedSelector(
		(state) => state.repositories
	)
	const [state] = useClonedStateWithAutoUpdate(term)
	console.log(state)
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		searchRepositories(term)
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input value={term} onChange={(e) => setTerm(e.target.value)} />
				<button>Submit</button>
			</form>
			<h3>{error && <div>{error}</div>}</h3>
			<h3>{loading && <div>...loading</div>}</h3>
			<h3>
				{!error &&
					!loading &&
					data.map((name) => <div key={name}>{name}</div>)}
			</h3>
		</>
	)
}

export default RepositoriesComponent
