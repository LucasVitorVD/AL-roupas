import styled from "styled-components";
import { theme } from "@/shared/themes/theme";

export const StyledSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .banner {
    width: 100%;
    height: 300px;
    background-image: url("src/assets/al-fashion-logo.png");
    background-position: center;
    overflow-x: hidden;
  }

  .aboutText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-inline: 2rem;
  }

  h1 {
    font-family: ${theme.fontFamily.sairaStencil}, Courier, monospace;
    color: ${theme.colors.textColor1};
    font-size: 2.5em;
  }

  p {
    text-align: justify;
  }
`