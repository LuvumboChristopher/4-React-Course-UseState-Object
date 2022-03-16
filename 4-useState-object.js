import React, { useState } from 'react';

const UseStateObject = () => {

  const [person , setPerson]= useState({
    name:'Christopher',
    age:25,
    message: 'random message'
  });


  //Puedes utilizar todos los multiple valores que desees
  const [name, setName]= useState('Peter');
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('Hey there')


  // Muy importante para no sobreescribir todos los demas datos cuando queremos
  // cambiar un elemento del objeto
  const changeMessage = ()=> {
    setPerson({ ...person, message: 'Hello Christopher'})
    setMessage('Hello Peter')
  }

  return (
    <>
      <h2>useState object example</h2>
      <div>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
      </div>
      <div>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{message}</h3>
      </div>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
};

export default UseStateObject;
