import React from 'react'
import { Link } from 'react-router-dom'
import { useOdontologoStates } from './utils/global.context'

const Navbar = () => {
  const {dispatch, state} = useOdontologoStates();
  const handleButton = () => {
    dispatch({type: 'SWITCH_THEME', payload: null})
  }
  return (
    <nav className={state.theme ? '' : "dark"} style={{display:"flex", justifyContent:"space-between"}}>
      <img src="/DH.ico" alt="" />
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/favs'>Favs</Link>

      <button onClick={handleButton}>Change theme</button>
    </nav>
  )
}

export default Navbar