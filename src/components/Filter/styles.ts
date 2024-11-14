import styled from "styled-components";
import { breakpoints } from "@/shared/themes/breakpoints";

export const StyledFilterWrapper = styled.div`
  display: flex;
  gap: .5rem;

  select {
    background-color: transparent;
    border: none;
    outline: none;
    padding: .5rem;
    font-size: 1rem;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    margin-top: 1rem;
  }
`