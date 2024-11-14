import styled from "styled-components";
import { breakpoints } from "@/shared/themes/breakpoints";

export const StyledPaginationWrapper = styled.div`
  display: flex;
  gap: .2rem;
  margin: 1rem 0 2rem auto;

  button {
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: .5rem;
    background: #E9E9F0;
    font-size: 1rem;
    padding: .3rem;
    color: ${({ theme }) => theme.textColor3};
    text-align: center;
    font-weight: 400;
    line-height: 1.5rem;
    cursor: pointer;
    transition: .1s;

    &:hover {
      color: #FFA585;
      border: 1px solid #FFA585;
    }
  }

  .current {
    color: #FFA585;
    border: 1px solid #FFA585;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    margin: 1.5rem auto 2rem auto;
  }
`