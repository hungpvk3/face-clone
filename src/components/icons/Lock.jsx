import React from 'react'

const Lock = ({css}) => {
  return (
    <div>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 ${css}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
        >
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
    </div>
  )
}

export default Lock