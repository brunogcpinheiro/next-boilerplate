import * as S from './styles'

export type ButtonProps = {
  text?: string
  background?: 'primary' | 'secondary'
}

const Button = ({ text = 'Submit', background = 'primary' }: ButtonProps) => (
  <S.Wrapper background={background}>{text}</S.Wrapper>
)

export default Button
