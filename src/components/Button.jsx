import React from 'react'

const Button = ({text, func}) => {
  return (
    <div>
      <button onClick={func} className='text-white text-xl font-bold mt-5 bg-gradient-to-tr from-teal-500 to-green-500 px-5 py-1 rounded-lg shadow-xl'>
        {text}
      </button>
    </div>
  )
}

export default Button
