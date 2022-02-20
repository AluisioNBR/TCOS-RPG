import Head from 'next/head'
import Image from 'next/image'

import { Header } from './components/header.tsx'
import '../styles/styles.css'

function TCOSBody(){
    return (
        <div>
            <Header />
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