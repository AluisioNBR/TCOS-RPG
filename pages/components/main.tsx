import { GameMenu, StopSelection, StopLoad, NameSelection, NameSelectionInvalidation } from './main/gameMenu.tsx'

function Main(){
	return (
			<main>
				<GameMenu />
				<StopSelection />
				<StopLoad />
			</main>
		)
}

export { Main }