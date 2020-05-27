import React from 'react';
import Layout from '../components/layout'
import {graphql, useStaticQuery} from 'gatsby'
import Search from '../components/Search'

// in the props we have access to the context from the node file
export default ({ pageContext }) => {

  const { localSearchPages } = useStaticQuery(graphql`
    query localSearchPages {
      localSearchPages {
        index
        store
      }
    } 
  `)
 
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <h2>This is a default page template</h2>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content}}/>

      <h2>Search Pages</h2>
      <Search searchIndex={ localSearchPages } />
 
      <h2>XY Grid Test</h2>
      <div className="grid-x grid-margin-x grid-margin-y">
        <div className="cell medium-6 large-4">
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat placeat suscipit accusamus consectetur saepe.</h2>
        </div>
        <div className="cell medium-6 large-4">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto reprehenderit eveniet cumque eius voluptatum nostrum .</h2>
        </div>
        <div className="cell medium-6 large-4">
          <h2>3rd sentence Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis enim quos a porro exercitationem odio!</h2>
        </div>
      </div> 

      <h2>Accordion Test</h2>
      <ul className="accordion" data-accordion>
        <li className="accordion-item is-active" data-accordion-item>
          <a href="#" className="accordion-title">Accordion 1</a>
          <div className="accordion-content" data-tab-content>
            <p>Panel 1. Lorem ipsum dolor</p>
            <a href="#">Nowhere to Go</a>
          </div>
        </li>

        <li className="accordion-item" data-accordion-item>
          <a href="#" className="accordion-title">Accordion 2</a>
          <div className="accordion-content" data-tab-content>
            <p>Panel 2. Lorem ipsum dolor</p>
            <a href="#">Nowhere to Go</a>
          </div>
        </li>

        <li className="accordion-item" data-accordion-item>
          <a href="#" className="accordion-title">Accordion 3</a>
          <div className="accordion-content" data-tab-content>
            <p>Panel 3. Lorem ipsum dolor</p>
            <a href="#">Nowhere to Go</a>
          </div>
        </li>
      </ul>

      <h2>Reveal Test</h2>
      {/* The data-close attribute needs to be specified as data-close="" */}
      <div className="reveal" id="exampleModal1" data-reveal>
        <h1>Awesome. I Have It.</h1>
        <p className="lead">Your couch. It is mine.</p>
        <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
        <button className="close-button" data-close="" aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <p><button className="button" data-open="exampleModal1">Click me for a modal</button></p>
    </Layout>
  )
}
