import React, { useState } from "react";
import Layout from "../components/Layout";
import WorkFilterListItem from "../components/WorkFilterListItem";
import ProjectItem from "../components/ProjectItem";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import "../styles/global.css";

function WorkPage( {data} ) {
  // Set state
  const [displayArray, setDisplayArray] = useState(data.allPrismicProject.nodes)
  const [opacity, setOpacity] = useState(" opacity-100")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filtering items
  function filterItems(event) {
    setDisplayArray(data.allPrismicProject.nodes.filter(element => element.tags.includes(event.target.id)))
  }

  function filterClickHandler(event) {
    console.log(event.target.id) 
    // Set the active category
    setActiveCategory(event.target.id)
    // Fade out
    setOpacity(" opacity-0")
    // Filter
    setTimeout(
      function() {
        if (event.target.id === "all") {
          return setDisplayArray(data.allPrismicProject.nodes)
        } 
        filterItems(event)
      }, 
      300)
    //Fade in
    setTimeout(
      function() {
        setOpacity(" opacity-100")
      },
      500
    )
  }
  
  return (
    <Layout>
      <div className="xl:flex">
        <div className="flex xl:block xl:w-1/6 text-sm sm:text-lg lg:text-xl xl:text-2xl leading-normal lg:leading-normal xl:leading-normal border-t border-b border-black xl:border-none py-3 mb-8 md:mb-12 xl:mb-16">
          <div className="w-1/2 md:w-5/12 lg:w-1/2 xl:w-full mb-4 lg:mb-8">
            <h2>Our services</h2>
          </div>
          <div id="services" className="w-1/2 md:w-7/12 lg:w-1/2 xl:w-full flex xl:block" >
            <div className="w-1/2 xl:w-full">
              <ul>
                <WorkFilterListItem category="all" activeCategory={activeCategory} clickHandler={filterClickHandler}/> 
                <WorkFilterListItem category="identity" activeCategory={activeCategory} clickHandler={filterClickHandler}/> 
                <WorkFilterListItem category="art direction" activeCategory={activeCategory} clickHandler={filterClickHandler}/> 
                <WorkFilterListItem category="web" activeCategory={activeCategory} clickHandler={filterClickHandler}/> 
              </ul>
            </div>
            <div className="w-1/2 xl:w-full">
              <ul>
                <WorkFilterListItem category="publication" activeCategory={activeCategory} clickHandler={filterClickHandler}/> 
                <WorkFilterListItem category="campaign" activeCategory={activeCategory} clickHandler={filterClickHandler}/> 
                <WorkFilterListItem category="packaging" activeCategory={activeCategory} clickHandler={filterClickHandler}/>                 
              </ul>
            </div>
          </div>
        </div>

        <section id="work" className="xl:w-5/6">
          <ul>
            {displayArray.map((element) => (
              <ProjectItem
                key={element.uid} 
                projectName={element.data.project_title.text}
                services={element.tags}
                featureImage={getImage(element.data.feature_image.gatsbyImageData)}
                altText={element.data.feature_image.alt}
                slug={element.uid}
                opacity={opacity}
                />
            ))
            }
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export const query = graphql`
query {
  allPrismicProject(
    sort: {fields: data___order}    
  ) {
    nodes {
      data {
        project_title {
          text
        }
        order
        services
        feature_image {
          gatsbyImageData(placeholder: BLURRED)
          alt
        }
      }
      uid
      tags
    }
  }
}
`

export default WorkPage;