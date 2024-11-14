import { styled } from "styled-components";
import { breakpoints } from "@/shared/themes/breakpoints";

export const StyledProductSection = styled.section`
  flex: 1 0 auto;
  width: 80%;
`

export const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.textColor2};

  figure {
    height: 100%;

    img {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: ${breakpoints.md}) {
      width: 95%;
      margin-inline: auto;
    }
  }

  .productInfos {
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    flex: 1;

    @media screen and (max-width: ${breakpoints.sm}) {
      padding-left: 0;
    }
    
    .infoText {
      flex: 1 0 auto;
    }

    span {
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: .75rem;
    }

    #detailText {
      margin: 1.5rem 0 3.63rem 0;

      @media screen and (max-width: ${breakpoints.sm}) {
        margin: 1.5rem 0 2.5rem 0
      }
    }

    .description {
      h4 {
        color: ${({ theme }) => theme.textColor3};
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
      }

      p {
        color: ${({ theme }) => theme.textColor2};
        font-size: .875rem;
        font-weight: 400;
        line-height: 1.3125rem; 
        margin-top: .5rem;
        margin-bottom: 2rem;
      }
    }
  }

  .cardFooter {
    margin-bottom: .5rem;   
  }
`