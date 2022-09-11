import { ReactNode } from "react"
import classNames from "./class_names"

interface Props {
    children?: ReactNode
    className?: string
}

export default function Article ({ children, className }: Props) {
    return (
        <div className={classNames("bg-black/50 p-5 rounded-md border-white/10 border-2 z-0",className)}>
            {children}
        </div>
    )
}