import styled from 'styled-components'
import { Props } from '.'
import { theme } from '../../themes/light'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
  color: ${(props) =>
    props.tipo === 'principal'
      ? (props.theme as theme).corPrincipal
      : (props.theme as theme).corSecundaria};
`
