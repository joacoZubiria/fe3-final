import React, { useState } from "react";


const Form = () => {
  const [sended, setSended] = useState(false);
  const [errorLog, setErrorLog] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
    setSended(false);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSended(false);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) || !/^[a-z ,.'-]+$/i.test(name)){
      setErrorLog(true);
      return;
    }
    setSended(true);
    setErrorLog(false);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre Completo</label>
        <input type="text" name="name" onChange={handleName}/>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" onChange={handleEmail}/>
        <button type="submit">Enviar</button>
      </form>
      {sended ? `Gracias ${name}, te contactaremos cuando antes vía mail` : null}
      {errorLog ? <p style={{backgroundColor:"red"}}>Por favor verifique su información nuevamente</p> : null}
    </div>
  );
};

export default Form;
