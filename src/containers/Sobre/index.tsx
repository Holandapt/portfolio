import Tittle from '../../components/Tittle'
import Paragraph from '../../components/Paragraph'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Tittle fontSize={16}>Sobre mim</Tittle>
    <Paragraph tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum et
      cupiditate commodi unde exercitationem. Amet dolores, nemo placeat unde
      dolorem nihil quibusdam delectus ipsam itaque sunt, rerum quisquam
      recusandae?
    </Paragraph>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=Holandapt&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Holandapt&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
