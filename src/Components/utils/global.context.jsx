import { createContext, useEffect, useReducer, useContext, useMemo } from "react";

const OdontologoStates = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'GET_ODONTOLOGOS':
      return {...state, odontologos: action.payload}
    case 'GET_ODONTOLOGO':
      return {...state, odontologo: action.payload}
    case 'ADD_FAV':
      return {...state, favs: [...state.favs, action.payload]}
    case 'SWITCH_THEME':
      return {...state, theme: !state.theme}
    default:
      throw new Error()
  }
}
const localFavs = JSON.parse(localStorage.getItem('favs'))

const initialFavState = localFavs ? localFavs : []

const initialState = {theme: true, odontologos: [], odontologo: {}, favs: initialFavState, theme:true}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = 'https://jsonplaceholder.typicode.com/users'
  console.log(state.favs)
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(res => dispatch({type:'GET_ODONTOLOGOS', payload: res}))
    .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])
  
  return (
    <OdontologoStates.Provider value={{dispatch, state}}>
      {children}
    </OdontologoStates.Provider>
  );
};

export default ContextProvider

export const useOdontologoStates = () => useContext(OdontologoStates)