import { P } from './styles'
import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
  tipo?: 'principal' | 'secundaria'
}

const Paragraph = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragraph
