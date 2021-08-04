import * as React from "react";

import Layout from "../../components/Layout";
import SliceZone from '../../components/SliceZone'
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { RichText } from "prismic-reactjs";
import htmlSerializerProjects from "../../utils/htmlSerializerProjects"

import "../../styles/global.css";

function ProjectTemplatePage( {data} ) {
  console.log(data)
  return (
    <Layout>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl leading-normal lg:leading-normal xl:leading-normal">{data.prismicProject.data.project_title.text}</h2>
        <p className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl leading-normal lg:leading-normal xl:leading-normal mb-3 xl:mb-4 text-ds-grey">{data.prismicProject.data.lede.text}</p>

        <GatsbyImage className="w-full mb-6 md:mb-10 xl:mb-14" image={data.prismicProject.data.feature_image.gatsbyImageData} alt="Two boys sitting on a porch in rural Australia" />

        <div className="md:flex md:items-start md:justify-between mb-6 md:mb-10 xl:mb-14">
            <div className="md:w-5/12">
            <RichText htmlSerializer={htmlSerializerProjects} render={data.prismicProject.data.introduction.raw}/>
            </div>

            <div className="w-full md:w-1/2 table-fixed text-xs sm:text-sm lg:base font-light" dangerouslySetInnerHTML={{ __html: data.prismicProject.data.project_team_table.text }} />
        </div>

        <SliceZone slices={data.prismicProject.data.body}/>

        <p className="text-2xl lg:text-3xl xl:text-4xl mb-6 md:mb-10 xl:mb-14">
            <Link to="../work">View more of our work</Link>
        </p>
    </Layout>
  );
}

export const query = graphql`
query PrismicProjectQuery($id: String!) {
    prismicProject(id: {eq: $id}) {
      data {
        feature_image {
          gatsbyImageData(placeholder: BLURRED)
        }
        lede {
          text
        }
        project_title {
          text
        }
        introduction {
          raw
        }
        project_team_table {
          html
          raw
          text
        }
        body {
          ... on PrismicProjectDataBodyImagerySingleLandscape {
            id
            slice_type
            items {
              landscape_image {
                alt
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          ... on PrismicProjectDataBodyText {
            id
            slice_type
            items {
              text {
                raw
              }
            }
          }
          ... on PrismicProjectDataBodyImageRow {
            id
            slice_type
            items {
              image_row {
                alt
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }        
          ... on PrismicProjectDataBodyImageAndTextRow {
            id
            slice_type
            primary {
              image {
                gatsbyImageData
                alt
              }
              text {
                raw
              }
            }
          }        
        }
      }
    }
  }
`

export default ProjectTemplatePage;
