import { FC } from "react"
import RepositoriesComponent from "./components/Repositories"
import TypicodeComponent from "./components/typicode"

export const App: FC = () => {
	return (
		<>
			<RepositoriesComponent />
			<TypicodeComponent />
		</>
	)
}
