import styled from 'styled-components'
import { theme } from './shared/themes/theme'

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.colors.secondary};
  font-family: ${theme.fontFamily.saira}, sans-serif;

  a {
    text-decoration: none;
    color: #09090A;
  }
`

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
`