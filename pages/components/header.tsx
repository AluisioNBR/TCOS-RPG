import { useState } from 'react'
import Image from 'next/image'

function StatusButton(){
    const [visibility, active] = useState('not-active')

    return <button className={`button ${visibility}`} id='toggleStatus'>
        Status
    </button>
}

function MoneyContent() {
    return (
        <div id="money-content">
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Image src="/img/coin.gif" width={64} height={64} title="Coin">
                <label htmlFor="money" title="Coins">
                    Coins:
                </label>
            </div>
            
            <input type="number" name="money" id="money" title="Coins" readOnly placeholder="0" />
        </div>
    )
}

/*
<div>
    <label for="money" title="Coins">
        <Image src="/img/coin.gif" width={64} height={64} title="Coin">
        Coins:
    </label><br/>

    <input type="number" name="money" id="money" title="Coins" readOnly placeholder="0" />
</div>
*/

function StatusDetails(){
    const [visibility, active] = useState('active')

    return (
        <div id="status-fixed" className={`${visibility}`}>
            <Image id="avatar" src="/img/outline-user.png" width={50} height={50} alt="Avatar" title="Avatar"/>
            <MoneyContent />
        </div>
    )
}

function Header(){
    return (
        <div>
            <header>
                <StatusButton />

                <StatusDetails />
            </header>
        </div>
    )
}

export { Header }