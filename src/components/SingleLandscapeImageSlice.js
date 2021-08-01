import * as React from "react";
import "../styles/global.css";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

function SingleLandscapeImageSlice(props) {
    console.log(props)
    return (
        <GatsbyImage className="w-full mb-6 md:mb-10 xl:mb-14" image={props.slice.items[0].landscape_image.gatsbyImageData} alt="Two boys sitting on a porch in rural Australia" />
    )
}

export default SingleLandscapeImageSlice

