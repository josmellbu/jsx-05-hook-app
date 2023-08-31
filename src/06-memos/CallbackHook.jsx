import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

  const [counter, setCounter] = useState( 10 );

  const incrementF = useCallback(
    () => {
      setCounter( ( val ) => val + 1 )
    },
    [],
  )

  return (
    <>  
      <h1>useCallBack Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={ incrementF }/>
    </>
  )
}
