import { ChevronLeft, ChevronRight } from "lucide-react"
import { StyledPaginationWrapper } from "./styles"
import { useContext } from "react"
import { FilterContext } from "@/context/FilterContext"

const Pagination = () => {
  const { currentPage, setCurrentPage } = useContext(FilterContext)

  const totalPages = 5
  const pageButtons = []

  for (let i = 1; i < totalPages; i++) {
    pageButtons.push(i)
  }

  return (
    <StyledPaginationWrapper>
      {pageButtons.length > 0 && (
        pageButtons.map(page => (
          <button 
            key={page}
            className={currentPage === page ? 'current' : ''}
            disabled={currentPage === page ? true : false} 
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))
      )}
      <button onClick={() => setCurrentPage(currentPage - 1)}>
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>
        <ChevronRight size={20} />
      </button>
    </StyledPaginationWrapper>
  )
}

export default Pagination