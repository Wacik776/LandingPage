///<reference types="vite-plugin-svgr/client" />
import { useState } from "react"
import MenuIcon from "../../images/icon-menu.svg?react"
import MenuIconClose from "../../images/icon-close-menu.svg?react"
import ReactLogo from "../../images/logo.svg?react"
import { Button } from "../button"
import { NavItem } from "../nav-item"
import { NavMenu } from "../nav-menu"
import { COMPANY, FEATURES } from "./constants"
import { MobileMenu } from "../mobile-menu"

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <header className="flex items-center justify-between">
        <ReactLogo />
        <nav className="hidden xl:flex space-x-4 ml-8 items-center">
        <NavItem text="Features">
          <NavMenu items={FEATURES}/>
        </NavItem>
        <NavItem text="Company">
          <NavMenu items={COMPANY}/>
        </NavItem>
        <NavItem text="Careers"/>
        <NavItem text="About"/>
        </nav>
        <div className="hidden xl:flex ml-auto space-x-5">
          <Button isFilled={true}>Loggin</Button>
          <Button hasBorder={true} >Register</Button>
        </div>
        <div className="flex xl:hidden cursor-pointer z-30"
        onClick={()=>setMobileOpen(!mobileOpen)}>
          {mobileOpen? <MenuIconClose/> : <MenuIcon/>}
        </div>
        <MobileMenu isOpen={mobileOpen}/>
        
    </header>
  )
}
