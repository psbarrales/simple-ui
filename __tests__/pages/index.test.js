import { render, screen } from '@testing-library/react'
import HomePage from 'pages/index.js'

describe('HomePage', () => {
  it('renders a heading', () => {
    render(<HomePage />)

    const heading = screen.getByText(/home page/i)

    expect(heading).toBeInTheDocument()
  })
})
