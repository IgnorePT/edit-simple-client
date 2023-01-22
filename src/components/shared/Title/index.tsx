import { ReactNode } from "react"

type TitleProps = {
 children: ReactNode
}

const Title = ({children} : TitleProps) => {
    return <h1 className="title">{children}</h1>
}

export default Title

