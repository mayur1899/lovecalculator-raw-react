import React from 'react'

const Screen = ({value}) => {
  return (
    <div>
      <h1 className='text-cyan-400 font-black text-6xl drop-shadow-sm my-4 text-center'>
        {value}
      </h1>
    </div>
  )
}

export default Screen
