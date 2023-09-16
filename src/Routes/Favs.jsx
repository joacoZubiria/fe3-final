import React from "react";
import Card from "../Components/Card";
import { useOdontologoStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useOdontologoStates()
  return (
    <>
    <main className={state.theme ? '' : "dark"}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map(fav => <Card theme={state.theme} odontologo={fav} key={fav.id}/> )}
      </div>
      </main>
    </>
  );
};

export default Favs;
