import React from 'react'
import { Image, DivBottom } from '../styles/Container1'

const Container1 = () => {
  return (
    <div>
        <Image src={require('./../images/illustration-intro.png')} alt="img1" />
        <DivBottom>
            <h1>All your Files in a secure location, accesibles anywhere</h1>
            <p>Fylo stores all your most important files in one secure location. Acces them whatever you need, share and collaborate with friends family, and co-workers.</p>
            <button>Get Started</button>
        </DivBottom>
    </div>
  )
}

export default Container1