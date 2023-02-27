import { ReactNode } from 'react'
import './Card.scss'

interface CardProps {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  return <div className="Card">{children}</div>
}
export default Card
