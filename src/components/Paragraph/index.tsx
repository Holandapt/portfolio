import { P } from './styles'
import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
  tipo?: 'principal' | 'secundaria'
  fontSize?: number
}

const Paragraph = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragraph
