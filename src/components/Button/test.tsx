import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render a button with default background color and without text', () => {
    renderWithTheme(<Button />)
    expect(screen.getByText('Submit')).toHaveStyle({
      backgroundColor: '#27ae60'
    })
  })

  it('should render a button with default background color and with text', () => {
    renderWithTheme(<Button text="Submit" />)
    expect(screen.getByText('Submit')).toHaveStyle({
      backgroundColor: '#27ae60'
    })
  })

  it('should render a button with secondary background color', () => {
    renderWithTheme(<Button text="Submit" background="secondary" />)
    expect(screen.getByText('Submit')).toHaveStyle({
      backgroundColor: '#74b9ff'
    })
  })
})
