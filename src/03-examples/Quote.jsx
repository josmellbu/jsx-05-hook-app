import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({ name, species, image }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  })

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect()
    setBoxSize({ width, height })
  }, [name])

  return (
    <>
      <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'end'}}>
        <img src={image} alt={name} />
        <div className='blockquote text-end'>
          <p className='mb-1' ref={pRef}>{name}</p>
          <footer className='blockquote-footer'>{species}</footer>
        </div>
      </div>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
