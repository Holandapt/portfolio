import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Tittle from '../../components/Tittle'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type props = {
  trocaTema: () => void
}

const Sidebar = (props: props) => (
  <>
    <aside>
      <SidebarContainer>
        <Avatar />
        <Tittle fontSize={20}>Lucas Holanda</Tittle>
        <Paragraph fontSize={16} tipo="secundaria">
          Holandapt
        </Paragraph>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro Full Stack
        </Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  </>
)

export default Sidebar
