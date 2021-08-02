import * as React from "react";
import Layout from "../components/Layout";
import ProjectItem from "../components/ProjectItem";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import "../styles/global.css";

function WorkPage( {data} ) {
  return (
    <Layout>
      <div className="xl:flex">
        <nav className="flex xl:block xl:w-1/6 text-sm sm:text-lg lg:text-xl xl:text-2xl leading-normal lg:leading-normal xl:leading-normal border-t border-b border-black xl:border-none py-3 mb-8 md:mb-12 xl:mb-16">
          <div className="w-1/2 md:w-5/12 lg:w-1/2 xl:w-full mb-4 lg:mb-8">
            <h2>Our services</h2>
          </div>
          <div id="services" className="w-1/2 md:w-7/12 lg:w-1/2 xl:w-full flex xl:block" >
            <div className="w-1/2 xl:w-full">
              <ul>
                <li><p className="all text-ds-orange">All</p></li>
                <li><p className="identity">Identity</p></li>
                <li><p className="art-direction">Art direction</p></li>
                <li><p className="web">Web</p></li>
              </ul>
            </div>
            <div className="w-1/2 xl:w-full">
              <ul>
                <li><p className="editorial">Editorial</p></li>
                <li><p className="campaign">Campaign</p></li>
                <li><p className="packaging">Packaging</p></li>
              </ul>
            </div>
          </div>
        </nav>

        <section id="work" className="xl:w-5/6">
          <ul>
            { 
              data.allPrismicProject.nodes.map((element) => (
                <ProjectItem
                  key={element.uid} 
                  projectName={element.data.project_title.text}
                  services={element.tags}
                  featureImage={getImage(element.data.feature_image.gatsbyImageData)}
                  altText={element.data.feature_image.alt}
                  slug={element.uid}
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