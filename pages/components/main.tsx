import { GameMenu, StopSelection, StopLoad, NameSelection, NameSelectionInvalidation, BreedSelection, ClassSelection } from './main/gameMenu.tsx'

function Main(){
	return (
			<main>
				<GameMenu />
				<StopSelection />
				<StopLoad />

				<NameSelection />
				<NameSelectionInvalidation />
				<BreedSelection/>
				<ClassSelection/>
			</main>
		)
}

export { Main }