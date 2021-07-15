import * as S from './styles'

const Main = ({
  title = 'React Avançado Boilerplate',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustation
      src="img/hero-illustration.svg"
      alt="desenvolvedor de frente para a tela de código"
    />
  </S.Wrapper>
)

export default Main
