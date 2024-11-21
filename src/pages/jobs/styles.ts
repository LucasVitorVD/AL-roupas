import styled from "styled-components";
import { theme } from "@/shared/themes/theme";

export const StyledSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  h1 {
    font-family: ${theme.fontFamily.sairaStencil}, Courier, monospace;
    color: ${theme.colors.textColor1};
    font-size: 2.5em;
  }

  p {
    text-align: justify;
  }
`