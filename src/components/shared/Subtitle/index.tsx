import { ReactNode } from "react"

type SubtitleProps = {
 children: ReactNode
}

const Subtitle = ({children} : SubtitleProps) => {
    return <h4 className="subtitle">{children}</h4>
}

export default Subtitle
