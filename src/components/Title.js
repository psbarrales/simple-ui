import styled, { withTheme } from 'styled-components'

const Content = styled.div`
  font-size: 40px;
`

const Title = ({ children }) => {
  return <Content>{children}</Content>
}

export default withTheme(Title)
