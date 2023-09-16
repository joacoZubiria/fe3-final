import React from 'react'
import Card from '../Components/Card'
import { useOdontologoStates } from '../Components/utils/global.context'


const Home = () => {
  const {state} = useOdontologoStates()
  console.log(state)
  return (
    <main className={state.theme ? '' : "dark"} >
      <h1>Home</h1>
      <div className='card-grid'>
      {state.odontologos.map(odontologo => <Card theme ={state.theme} odontologo={odontologo} key={odontologo.id}/>)}
      </div>
    </main>
  )
}

export default Home