import { render, screen } from '@testing-library/react'
import HomePage from 'src/pages/index.js'

describe('HomePage', () => {
  it('renders a heading', () => {
    render(<HomePage />)

    const heading = screen.getByRole('heading', {
      name: /home page/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
