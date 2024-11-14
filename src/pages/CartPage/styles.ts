import styled from "styled-components";
import { breakpoints } from "@/shared/themes/breakpoints";

export const StyledCartSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  flex: 1 0 auto;
  width: 80%;
  margin-top: 1.66rem;

  @media screen and (max-width: ${breakpoints.md}) {
    grid-template-columns: 2fr;
    align-items: center;
  }
`

export const StyledCartProductsWrapper = styled.div`
  .header {
    margin-bottom: 1.44rem;

    h1 {
      color: ${({ theme }) => theme.textColor2};
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 2.25rem;
    }
    
    p {
      color: ${({ theme }) => theme.textColor2};
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.5rem;
    }
  }
`

export const StyledProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const StyledOrderSummaryWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #FFF;
  padding: 1.5rem;

  .summary {
    display: flex;
    flex-direction: column;
    flex: 1;

    h2 {
      color: ${({ theme }) => theme.textColor2};
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.875rem;
      margin-bottom: 1.81rem;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p, span {
        color: ${({ theme }) => theme.textColor2};
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }

    .total {
      border-top: 1px solid #DCE2E5;
      padding-top: .5rem;
      margin-top: .5rem;

      p, span {
        font-weight: 600; 
      }
    }

    button {
      background-color: #51b853;
      border: none;
      color: #F5F5FA;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5rem;
      padding: .5rem;
      margin-top: 2rem;
      cursor: pointer;
      transition: .2s;

      &:hover, &:active {
        opacity: .9;
      }
    }
  }
`

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: .75rem;

  a {
    color: ${({ theme }) => theme.textColor3};
    font-size: .875rem;
    font-weight: 500;
    line-height: 1.3125rem;
    text-decoration: underline;
  }

  @media screen and (max-width: ${breakpoints.md}) {
    margin-top: 2rem;
  }
` 