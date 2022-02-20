import { useState } from 'react'
import Image from 'next/image'

function StatusButton(props){
    function changeSelection(){
        const newSelection = props.selected == 'selected' ? 'no-selected' : 'selected'
        return newSelection
    }

    return <button onClick={() => props.setSelected(changeSelection())} className={`button ${props.visibility} ${props.selected}`} id='toggleStatus'>
        Status
    </button>
}

function MoneyContent() {
    return (
        <div id="money-content">
            <div>
                <label htmlFor="money" title="Coins">
                    <Image src='/img/coin.gif' width={16} height={16} title="Coin"/>
                    <span>Coins:</span>
                </label>
            </div>
            
            <input type="number" name="money" id="money" title="Coins" readOnly placeholder="0" />
        </div>
    )
}

function XPContent(){
    return (
        <div id="level-content">
            <div>
                <label htmlFor="xp-bar" title="Nível" id="level-viewer">
                    <Image src="/img/XPpoint.gif" width={16} height={16} title="Ponto de Experiência" />
                    <span>Nível 1</span>
                </label>
            </div>

            <div>
                <input type="range" title="Nível" name="xp-bar" id="xp-bar" min="1" max="100" value="0" readOnly /><br />
                <label htmlFor="xp-points" title="Pontos de XP" id="xp-points-indicator">XP points:</label>
                <input type="number" title="Pontos de XP" name="xp-points" id="xp-points" readOnly value="3" />
            </div>
        </div>
    )
}

function StatusDetails(props){
    const active = props.visibility == 'selected' ? 'active' : 'not-active'
    return (
        <div id="status-fixed" className={`${active}`}>
            <Image id="avatar" src="/img/outline-user.png" width={50} height={50} alt="Avatar" title="Avatar"/>
            
            <MoneyContent />

            <XPContent />
        </div>
    )
}

function Header(props){
    const [selected, setSelected] = useState('no-selected')

    return (
        <div>
            <header>
                <StatusButton visibility={props.statusButtonVisibility} selected={selected} setSelected={setSelected} />

                <StatusDetails visibility={selected}/>
            </header>
        </div>
    )
}

export { Header }