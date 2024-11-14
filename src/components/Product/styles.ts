import { styled, css } from "styled-components";
import { breakpoints } from "@/shared/themes/breakpoints";

interface StyledProductCardProps {
  page?: "home" | "cart"
}

const CardToHomePage = css`
  border-radius: 0.5rem 0.5rem 0 0; 

  .infos {
    backdrop-filter: blur(10px);
    border-radius: 0 0 .25rem .25rem;
    padding: .5rem .75rem 2.88rem .75rem;

    p:nth-child(1) {
      border-bottom: 1px solid #DCE2E5;
      color: ${({ theme }) => theme.textColor2};
      padding-bottom: .5rem;
      font-size: 1rem;
      font-weight: 300;
    }

    p:nth-child(2) {
      font-weight: bold;
      font-size: 0.875rem;
      margin-top: .5rem;
    }
  }
`

const CardToCartPage = css`
  display: flex;
  width: 100%;

  .infosContainer {
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 1.5rem 1.94rem;

    @media screen and (max-width: ${breakpoints.sm}) {
      padding: 1rem 0;
      width: 21rem;
    }

    .infos {
      flex: 1 0 auto;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .75rem;
      }

      p {
        color: ${({ theme }) => theme.textColor2};
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 1.875rem;
      }

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
      }

      .productDesc {
        color: ${({ theme }) => theme.textColor2};
        font-size: .75rem;
        line-height: 1.125rem;
      }
    }

    #productQuantity {
      border: 1px solid ${({ theme }) => theme.textColor3};
      border-radius: .5rem;
      padding: .5rem 1rem;
      font-size: 1rem;
      color: ${({ theme }) => theme.textColor3};
    }

    .cardSummary {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media screen and (max-width: ${breakpoints.sm}) {
        margin-top: 1rem;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const StyledProductCard = styled.div<StyledProductCardProps>`
  figure {
    width: ${props => (props.page === "home" ? "100%" : "24rem")};
    height: auto;

    img {
      width: 100%;
      height: ${props => (props.page === "home" ? "auto" : "100%")};
      border-radius: ${props => (props.page === "home" && "0.5rem 0.5rem 0 0")};
    }

    @media screen and (max-width: ${breakpoints.sm}) {
      width: ${props => (props.page === "cart" && "21rem")};
    }
  }

  ${props => props.page === 'home' && CardToHomePage}

  ${props => props.page === 'cart' && CardToCartPage}
`