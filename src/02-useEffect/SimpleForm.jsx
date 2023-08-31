import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [ formState, setFormState ] = useState({
    username: 'stronger',
    email: 'doggy@dog.com',
  });

  const { username, email } = formState;

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]: value
    })

    useEffect(() => {

    }, [])

  }

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={ onInputChange }
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="asdasd@asd.com"
        name="email"
        value={email}
        onChange={ onInputChange }
      />

      {username === 'stronger' && <Message />}
    </>
  )
}
