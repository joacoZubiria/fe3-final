import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useOdontologoStates } from '../Components/utils/global.context'

const Detail = () => {
 
  const {state, dispatch} = useOdontologoStates()
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  const {name, email, phone, website} = state.odontologo
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'GET_ODONTOLOGO', payload: data})
      setLoading(false)
    })
  }, [])
  return (
    <>
    <main className={state.theme ? '' : "dark"}>
      <h1>Detail Dentist id </h1>
      {loading ? 'Cargando...' :
      <>
      <p>{name}</p>
      <br />
      <p>{email}</p>
      <br />
      <p>{phone}</p>
      <br />
      <p>{website}</p>
      </>
    }
    </main>
    </>
  )
}

export default Detail