import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`

const PageNumberWrapper = styled.div`
  border: 1px solid #eee;
  background: ${props => props.isCurrentPage? `#eee` : `#fff`};
`

const PageNumber = styled(Link)`
  display: block;
  padding: 8px 16px;
  text-decoration: none;
`
const Pagination = ({ pageContext }) => (
  <PaginationContainer>
    
    {pageContext.currentPage > 1 ? (
      <PageNumber to={pageContext.currentPage === 2 ? `/news` : `/news/${pageContext.currentPage - 1}`}>
        Previous
      </PageNumber>
    ) : null}

    {Array.from({ length: pageContext.numberOfPages }).map((page, index) => (
      <PageNumberWrapper key={index} isCurrentPage={index + 1 === pageContext.currentPage}>
        <PageNumber to={index === 0 ? `/news` : `/news/${index + 1}`}>
          {index + 1}
        </PageNumber>
      </PageNumberWrapper>
    ))}
    
    {pageContext.currentPage < pageContext.numberOfPages ? (
      <PageNumber to={`/news/${pageContext.currentPage + 1}`}>
        Next
      </PageNumber>
    ) : null}

  </PaginationContainer>
)

export default Pagination;
