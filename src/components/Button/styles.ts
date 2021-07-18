import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, background }) => css`
    background-color: ${theme.colors[background!]};
    border: 2px solid ${background === 'secondary' ? 'royalblue' : 'green'};
  `}
  padding: 6px 14px;
  font-size: 1.2rem;
  font-weight: bolder;
  cursor: pointer;
  border-radius: 0.8rem;
`
