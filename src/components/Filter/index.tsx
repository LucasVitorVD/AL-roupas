import { StyledFilterWrapper } from "./styles"
import { useContext } from "react"
import { FilterContext } from "@/context/FilterContext"

interface Option {
  title: string
  value: string,
  isDisabled?: boolean
}

const options: Option[] = [
  {
    title: "Novidades",
    value: "news",
    isDisabled: false,
  },
  {
    title: "Preço: Maior - menor",
    value: "bigSmall",
    isDisabled: false,
  },
  {
    title: "Preço: Menor - maior",
    value: "smallBig",
    isDisabled: false,
  },
  {
    title: "Mais vendidos",
    value: "bestSellers",
    isDisabled: false,
  },
]

const Filter = () => {
  const { orderBy, setOrderBy } = useContext(FilterContext)

  return (
    <StyledFilterWrapper>
      <select
        name="filters"
        id="filters"
        value={orderBy}
        onChange={(e) => setOrderBy(e.target.value)}
      >
        <option value="" disabled>
          Ordernar por:
        </option>
        {options.map((option: Option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.isDisabled}
          >
            {option.title}
          </option>
        ))}
      </select>
    </StyledFilterWrapper>
  )
}

export default Filter
