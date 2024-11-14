import { LucideProps } from "lucide-react"
import { StyledButton } from "./styles"

interface ButtonProps {
  text: string,
  handleOnClick?: () => void,
  Icon?: React.ComponentType<LucideProps>,
  value: "default" | "success"
}

function Button({ text, handleOnClick, Icon, value = "default" }: ButtonProps) {
  return (
    <StyledButton onClick={handleOnClick} status={value}>
      {Icon && <Icon />}
      {text}
    </StyledButton>
  )
}

export default Button