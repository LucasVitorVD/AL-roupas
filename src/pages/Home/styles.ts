import styled from "styled-components";
import { breakpoints } from "@/shared/themes/breakpoints";

export const StyledSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 68.3%;

  .categoryTitle {
    text-align: center;
    margin-bottom: 1rem;
  }
 
  @media screen and (max-width: ${breakpoints.sm}) {
    width: 80%;

    .categoryTitle {
      margin-top: 1.5rem;
    }
  }
`

export const StyledNavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  @media screen and (max-width: ${breakpoints.sm}) {
    display: none;
    margin-inline: auto;
  }
`
export const StyledProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  a {
    width: 200px;
    height: auto;
  }
`