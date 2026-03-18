import styled from 'styled-components'
import { Props } from './index'
import { theme } from '../../themes/light'

export const Tittle = styled.h3<Props>`
  color: ${(props) => (props.theme as theme).corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weigth: bold;
  margin-bottom: 16px;
`
