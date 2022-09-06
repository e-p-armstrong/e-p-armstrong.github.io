import React, { ReactNode } from "react"
import { NavLink } from "react-router-dom"
import classNames from "./class_names"

interface Props {
    to: string;
    className?: string;
    children: ReactNode
}

export default function NavbarLink ({children, className, to}: Props) {
    return (
        <NavLink to={to} className={({isActive}) => classNames("italic", 
        isActive ? "font-semibold text-zinc-200" : "font-normal text-zinc-400")
    }>{children}</NavLink>
    )
}