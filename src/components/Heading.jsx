import React from 'react'

const Heading = ({text}) => {
  return (
    <div>
      <h1 className='text-white text-center font-bold text-4xl font-honk m-4'>
        {text}
      </h1>
    </div>
  )
}

export default Heading
