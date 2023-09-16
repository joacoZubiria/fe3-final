import React from 'react'
import Form from '../Components/Form'
import { useOdontologoStates } from '../Components/utils/global.context'


const Contact = () => {
  const {state} = useOdontologoStates()
  return (
    <main className={state.theme ? '' : "dark"}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </main>
  )
}

export default Contact