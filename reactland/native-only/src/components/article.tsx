import { ReactNode } from "react"

interface Props {
    children?: ReactNode
}

export default function Article ({ children }: Props) {
    return (
        <div className="bg-black/50 p-5 rounded-md border-white/10 border-2">
            {children}
        </div>
    )
}