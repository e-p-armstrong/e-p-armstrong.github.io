import { ReactNode } from "react"
import classNames from "./class_names"

interface Props {
    children?: ReactNode
    className?: string
}

export default function Para({children, className}: Props) {
    return (
        <p className={classNames("dark:text-zinc-200 text-zinc-800 mb-3", className)}>{children}</p>
    )
}