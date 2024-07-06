import React from 'react'

interface WrapperProps{
    children?: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({children}) => {
  return (
    <div className='container mx-auto py-4 px-2 min-h-screen'>
        {children}
    </div>
  )
}
