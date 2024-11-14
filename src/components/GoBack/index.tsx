import { ArrowLeftCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { StyledGoBackWrapper } from "./styles"

const GoBack = () => {
  const navigate = useNavigate()

  return (
    <StyledGoBackWrapper>
      <ArrowLeftCircle color="#617480" cursor={"pointer"} onClick={() => navigate(-1)} />
      <p>Voltar</p>
    </StyledGoBackWrapper>
  )
}

export default GoBack