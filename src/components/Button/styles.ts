import { styled } from "styled-components";

interface StyledButtonProps {
  status?: "default" | "success"
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .75rem;
  padding: .5rem;
  width: 100%;
  border: none;
  border-radius: .25rem;
  background-color: ${(props) => props.status === "success" ? "#51b853" : "#115D8C"};
  color: #F5F5FA;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: .2s;

  &:hover {
    opacity: .9;
  }
`