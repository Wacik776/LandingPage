import React from 'react'
import { ItemProps } from '../header/constants'
import { MenuItem } from '../menu-item'
// import { MenuItem } from '../menu-item'

interface MenuProps{
    items: ItemProps[]
}

export const NavMenu: React.FC<MenuProps> = ({items}) => {
  return (
    <div className='flex flex-col px-4 py-2 bg-almost-white drop-shadow rounded-lg absolute top-10 right-0 w-36 space-y-2 z-30'>
      {items.map((item) => ( 
        <div> 
          <MenuItem key={item.text} icon={item.icon} text={item.text}/>
        </div> 
      ))}
    </div>
  )
}
