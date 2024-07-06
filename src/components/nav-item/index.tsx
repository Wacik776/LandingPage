///<reference types="vite-plugin-svgr/client" />
import { ReactNode, useState } from "react"
import ArrowDownIcon from "../../images/icon-arrow-down.svg?react";
import ArrowUpIcon from "../../images/icon-arrow-up.svg?react";


export interface NavProps{
    text: string,
    children?: ReactNode,
}

export const NavItem: React.FC<NavProps> = ({text, children}) => {
  const [selected,setSelected] = useState('')

  return (
    <div className="relative">
        <div className="flex space-x-2 cursor-pointer items-center">
            <span 
            className="text-black xl:text-white hover:text-almost-black"
            onClick={()=> children && setSelected(text!==selected? text: '')} >
                {text}
            </span>
            {children && selected!==text && <ArrowDownIcon/>}
            {children && selected===text && <ArrowUpIcon/>}
        </div>
        {selected && children}
    </div>
  )
}
