import React from 'react'
import { useOdontologoStates } from './utils/global.context'

const Footer = () => {
  const {state} = useOdontologoStates()
  return (
    <footer className={state.theme ? '' : "dark"}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo'/>
    </footer>
  )
}

export default Footer
