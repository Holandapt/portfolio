import { type } from 'os'
import { Tittle as TittleStyle } from './styles'
import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
  fontSize?: number
}

const Tittle = (props: Props) => (
  <TittleStyle fontSize={props.fontSize}> {props.children}</TittleStyle>
)

export default Tittle
