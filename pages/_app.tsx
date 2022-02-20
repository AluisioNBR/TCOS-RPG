import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react'

import { Header } from './components/header.tsx'
import { Main } from './components/main.tsx'
import '../styles/styles.css'

function TCOSBody(){
    const [statusButtonVisibility, setStatusButtonVisibility] = useState('not-active')
    
    return (
        <div>
            <Header statusButtonVisibility={statusButtonVisibility} />

            <Main />
        </div>
    )
}

function TCOS(){
    return (
        <div>
            <Head>
                <title>
                    The Core of Shadows - RPG
                </title>
		        
                <link rel="shortcut icon" href="/img/logo.png" type="image/x-icon" />
            </Head>

            <TCOSBody />
        </div>
    )
}

export default TCOS