import { useFetch, useCounter } from '../hooks'
import { LoadingCharacter, Quote } from '../03-examples';


export const Layout = () => {

  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)
  const { name, species, image } = !!data && data;

  return (
    <>
      <h1>Breaking Quotes</h1>
      <hr />
      
      { 
        isLoading 
          ? <LoadingCharacter />
          : <Quote 
              name={name} 
              species={species}
              image={image}
            />
      }

      <button 
        className='btn btn-primary'
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next Character
      </button>

    </>
  )
}
