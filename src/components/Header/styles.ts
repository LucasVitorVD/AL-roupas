import styled from "styled-components";
import { theme } from "@/shared/themes/theme";
import { Menu } from "lucide-react"
import { breakpoints } from "@/shared/themes/breakpoints";

export const StyledHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 6.5rem;
  width: 100%;
  background-color: ${theme.colors.primary};
  position: sticky;
  top: 0;
  z-index: 1;

  h1 {
    font-family: ${theme.fontFamily.sairaStencil}, Courier, monospace;
    color: ${theme.colors.textColor1};
    font-size: 2.5em;
  }
`

export const StyledSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 25rem;

  @media screen and (max-width: ${breakpoints.sm}) {
    display: none;
  }
`

export const StyledSearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  background: #F3F5F6;
  border-radius: 0.5rem;
  padding: .56rem 1rem;

  input {
    width: 100%;
    padding: .5rem;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
  }
`

export const StyledCartArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .cartBadge {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.0625rem;
    height: 1.0625rem;
    border-radius: 50%;
    background-color: red;
    color: #FFF;
    font-size: 0.625rem;
    font-weight: 500;
    line-height: 1.625rem;
    position: absolute;
    left: 15px;
    top: 15px;
  }
`

export const StyledMobileMenuIcon = styled(Menu)`
  @media screen and (min-width: 769px) {
    display: none;
  }
`