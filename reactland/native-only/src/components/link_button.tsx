import { ReactNode } from "react"
import classNames from "./class_names"

interface Props {
    href: string
    children: ReactNode
    target?: string
    className?: string
}

export default function LinkButton({ children, className, ...props }: Props) {
    return (
        <a {...props} className={classNames("dark:bg-zinc-700 dark:hover:bg-zinc-800 dark:active:bg-zinc-900 dark:text-zinc-200 text-zinc-900 bg-zinc-300 hover:bg-neutral-400 active:bg-gray-400 font-semibold p-2 rounded-md border-2 border-white/10 block w-fit", className)}>{children}</a>
    )
}