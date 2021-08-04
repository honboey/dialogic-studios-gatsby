import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { RichText } from "prismic-reactjs";
import htmlSerializerProjects from "../utils/htmlSerializerProjects"

function ImageAndTextRowSlice(props) {
    console.log(props)
    return (
        <div class="xl:flex xl:justify-between">
            <GatsbyImage class="xl:w-1/2 xl:mr-6 mb-6 md:mb-10 xl:mb-14" image={props.slice.primary.image.gatsbyImageData} alt={props.slice.primary.image.alt} />
            <div class="xl:w-1/2 text-lg lg:text-xl xl:text-2xl mb-6 md:mb-10 xl:mb-14">
                <RichText htmlSerializer={htmlSerializerProjects} render={props.slice.primary.text.raw} />
            </div>
        </div>
    )
}

export default ImageAndTextRowSlice