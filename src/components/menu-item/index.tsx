import React from 'react'
import { ItemProps } from '../header/constants'

export const MenuItem: React.FC<ItemProps> = ({ icon: Icon, text }) => { 
  return ( 
    <div className='flex w-full space-x-4'> 
      {Icon && <Icon /> }
      <span className='text-medium-gray hover:text-almost-black '>{text}</span> 
    </div> 
  ); 
};