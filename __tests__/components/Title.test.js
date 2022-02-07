import { render, screen } from '@testing-library/react'
import Title from 'components/Title'

describe('Title', () => {
  it('render a text', () => {
    render(<Title>example text</Title>)

    const title = screen.getByText(/example text/i)

    expect(title).toBeInTheDocument()
  })
})
