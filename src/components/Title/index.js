import styled, { withTheme } from 'styled-components'

const Content = styled.div`
  font-size: 40px;
  color: ${(props) => props.theme.primary};
`

const Title = ({ children, theme }) => {
  return <Content>{children}</Content>
}

export default withTheme(Title)
