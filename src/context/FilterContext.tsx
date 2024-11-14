import { createContext, useState } from "react"

interface PropsFilterContext {
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  category: string,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
  orderBy: string,
  setOrderBy: React.Dispatch<React.SetStateAction<string>>,
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const FilterContext = createContext<PropsFilterContext>({
  name: "",
  setName: () => {},
  category: "",
  setCategory: () => {},
  orderBy: "",
  setOrderBy: () => {},
  currentPage: 1,
  setCurrentPage: () => {}
})

export const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [orderBy, setOrderBy] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <FilterContext.Provider 
      value={
        { 
          name, 
          setName, 
          category, 
          setCategory,
          orderBy,
          setOrderBy,
          currentPage,
          setCurrentPage
        }
      }
    >
      {children}
    </FilterContext.Provider>
  )
}