import { styled } from "styled-components";

export const StyledNavigationWrapper = styled.div<{ isColumn: boolean }>`
  display: flex;
  flex-direction: ${({ isColumn }) => (isColumn ? "column" : "row")};
  gap: 2.5rem;

  p {
    color: ${({ theme }) => theme.textColor3};
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.375rem;
    cursor: pointer;
    transition: .1s;

    &:hover {
      color: ${({ theme }) => theme.textColor2};
    }
  }

  .isActive {
    color: ${({ theme }) => theme.textColor2};
    font-weight: bold;
    border-bottom: 2px solid #FFA585;
  }
`