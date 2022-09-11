import { ReactNode } from "react"
import classNames from "./class_names"

interface Props {
    children?: ReactNode
    className?: string
}

export default function Article ({ children, className }: Props) {
    return (
        <div className={classNames("p-5 rounded-md z-0", className)}>
            {children}
        </div>
    )
}