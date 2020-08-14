// import React, { useState } from 'react';
// import { Link } from 'gatsby';
// import styled from 'styled-components'
// import { useFlexSearch } from 'react-use-flexsearch'

// const SearchInput = styled.input`
//   border: 1px solid #162636;
// `

// const SearchResultsContainer = styled.ul`
//   margin: 16px 0;
//   padding: 0;
// `

// const SearchItems = styled.li`
//   list-style-type: none;
//   padding: 16px;
//   margin-bottom: 32px;
//   background-color: #f1f1f1;
// `

// const Search = ({ searchIndex }) => {

//   const index = searchIndex.index
//   const store = JSON.parse(searchIndex.store)

//   const [query, setQuery] = useState(``)
//   const results = useFlexSearch(query, index, store)

//   const search = (evt) => {
//     const query = evt.target.value;
//     setQuery(query);
//   }

//   const displayResults = () => {
//     if (results.length === 0 && query !== '') {
//       return <h3>Nothing Found</h3>
//     } else {
//       return (
//         <SearchResultsContainer>
//           {results.map(result => (
//             <SearchItems key={result.id}>
//               <h2 dangerouslySetInnerHTML={{ __html: result.title }} />
//               <p dangerouslySetInnerHTML={{ __html: result.excerpt }} />
//               <Link to={`/news${result.path}`}>
//                 <span dangerouslySetInnerHTML={{ __html: result.title }} />
//               </Link>
//             </SearchItems>
//           ))}
//         </SearchResultsContainer>
//       )
//     }
//   }

//   return (
//     <div>
//       <SearchInput type="text" value={query} onChange={search} />
//       {displayResults()}
//     </div>
//   ) 
// }

// export default Search;
