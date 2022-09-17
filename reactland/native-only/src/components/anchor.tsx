import { ReactNode } from "react"

interface Props { href: string, children: ReactNode }
export default function Anchor ({ children, ...props }: Props ) {
    return (
        <a className="text-sky-500 dark:text-sky-200  italic underline" target="_blank" rel="noreferrer" {...props}>{children}</a>
    )
}