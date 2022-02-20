import Image from 'next/image'
import { useState } from 'react'

function GameMenu(){
	return (
			<div id="game-menu" class="active generical-menu">
                <Image title="The Core of Shadows" src="/img/logo.png" width={150} height={150} alt="The Core of Shadows" className="logo"/>
                
                <div id="game-buttons-conteiner" class="generical-button-conteiner">
                    <button className="button" id="new-game-button">Novo Jogo</button>
                    <button className="button" id="load-game-button">Carregar Jogo</button>
                </div>
            </div>
		)
}

function StopSelection(){
    return (
            <div id="selectionStoped" class="modal-conteiner not-active">
                <div className="modal">
                    <h2>
                        Parece que você já tem um jogo salvo
                    </h2>
                    
                    <p>
                        Deseja prosseguir mesmo assim ?
                    </p>
        
                    <div>
                        <button id="newGameConfirmYes" className="button">Sim</button>
                        <button id="newGameConfirmNo" className="button">Não</button>
                    </div>
                </div>
            </div>
        )
}

function StopLoad(){
    return (
            <div id="loadStoped" className="modal-conteiner not-active">
                <div className="modal">
                    <h2>
                        Parece que você não tem um jogo salvo
                    </h2>
        
                    <button className="button" id="closeLoadStoped">Fechar</button>
                </div>
            </div>
        )
}

function NameSelection(){
    const [nameValue, setNameValue] = useState('')

    return (
            <div id="name-selection" class="not-active generical-menu">
                <h2 class="titles">
                    Qual o seu nome aventureiro ?
                </h2>
        
                <form>
                    <label htmlFor="name" hidden>Nome: </label>
                    <input className="button" min="5" max="10" type="text" name="name" id="nameInput" placeholder="Nickname (min: 5 | máx: 10)" value={nameValue} onChange={(newValue) => setNameValue(newValue)} />
        
                    <button id="confirm-name" className="button">Enviar</button>
                </form>
            </div>
        )
}

function NameSelectionInvalidation(){
    return (
            <div id="nameInvalidation-modal" className="modal-conteiner not-active">
                <div className="modal">
                    <h2>
                        Temos um problema... 
                    </h2>
        
                    <p>
                        A quantidade de caracteres no nome não é aceitável!!
                    </p>
        
                    <button className="button" id="close-nameInvalidation">
                        Tente novamente
                    </button>
                </div>
            </div>
        )
}

export { GameMenu, StopSelection, StopLoad, NameSelection, NameSelectionInvalidation }