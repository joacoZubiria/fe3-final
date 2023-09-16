import React from "react";
import { useOdontologoStates } from '../Components/utils/global.context'
import { Link } from "react-router-dom";

const Card = ({odontologo, theme}) => {
  const {dispatch} = useOdontologoStates();
  const { name, username, id } = odontologo;
  const addFav = ()=>{
    dispatch({type:'ADD_FAV', payload: odontologo})
  }

  return (
    <div className={`card ${theme ? '' : "dark"}`} >
      <Link to={'/detail/' + id}>    
        <p>{name}</p>
        <br/>
        <p>{username}</p>
        <br/>
        <p>{id}</p>
      </Link>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
