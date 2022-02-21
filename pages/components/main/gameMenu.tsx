import Image from 'next/image'
import { useState } from 'react'

function GameMenu(){
	return (
			<div id="game-menu" className="active generical-menu">
                <Image title="The Core of Shadows" src="/img/logo.png" width={150} height={150} alt="The Core of Shadows" className="logo"/>
                
                <div id="game-buttons-conteiner" className="generical-button-conteiner">
                    <button className="button" id="new-game-button">Novo Jogo</button>
                    <button className="button" id="load-game-button">Carregar Jogo</button>
                </div>
            </div>
		)
}

function StopSelection(){
    return (
            <div id="selectionStoped" className="modal-conteiner not-active">
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
            <div id="name-selection" className="not-active generical-menu">
                <h2 className="titles">
                    Qual o seu nome aventureiro ?
                </h2>
        
                <form onSubmit={(e: SubmitEvent) => e.preventDefault()}>
                    <label htmlFor="name" hidden>Nome: </label>
                    <input className="button" min="5" max="10" type="text" name="name" id="nameInput" placeholder="Nickname (min: 5 | máx: 10)" value={nameValue} onChange={(event) => setNameValue(event.target.value)} />
        
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

function BreedSelection(){
    return(
            <div id="breed-selection" className="not-active generical-menu">
                <h2 className="titles">
                    Defina sua Raça
                </h2>
        
                <div id="breed-buttons">
                    <button id="humanSelection" className="button">Humano(a)</button>
                    <button id="elfSelection" className="button">Elfo(a)</button>
                    <button id="dwarfSelection" className="button">Anão(ã)</button>
                    <button id="hobbitSelection" className="button">Hobbit</button>
                </div>
            </div>
        )
}

function ClassSelectionButton(props){
    return(
            <button id={props.id} className='button'>
                <Image src={props.src} alt={props.alt} width={64} height={64}/>
                <figcaption>{props.children}</figcaption>
            </button>
        )
}

function ClassButtons(){
    return(
            <div id="class-buttons">
                <ClassSelectionButton id="fighterSelection" src='/img/blue-glove.png' alt='Luva inicial'>
                    Lutador(a)
                </ClassSelectionButton>

                <ClassSelectionButton id="warriorSelection" src='/img/short-sword.png' alt='Espada Curta'>
                    Guerreiro(a)
                </ClassSelectionButton>
        
                <ClassSelectionButton id="archerSelection" src="/img/bow-and-arrow.png" alt="Arco Simples">
                    Arqueiro(a)
                </ClassSelectionButton>
        
                <ClassSelectionButton id="wizardSelection" src="/img/staff-basic.png" alt="Cajado Básico">
                    Mago(a)
                </ClassSelectionButton>
            </div>
        )
}

function ClassSelection(){
    return (
            <div id="class-selection" className="not-active generical-menu">
                <h2 className="titles">
                    Defina sua classe
                </h2>
        
                <ClassButtons />
            </div>
        )
}

export { GameMenu, StopSelection, StopLoad, NameSelection, NameSelectionInvalidation, BreedSelection, ClassSelection }