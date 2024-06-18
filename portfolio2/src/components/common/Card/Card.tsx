import { FC } from "react"

export interface Props {
    title: string,
    content: string,
    // children? : React.ReactElement
}
const Card:FC<Props> = ({title, content}) => {
  return (
    <div className="bg-white">
        <h3>{title}</h3>
        <div>   
            {content}
        </div>
    </div>
  )
}

export default Card;
