import * as React from "react";
import "../styles/global.css";
import { GatsbyImage } from "gatsby-plugin-image";

function SingleLandscapeImageSlice(props) {
    console.log(props)
    return (
        <>
            {props.slice.items.map((image, index) => (
                <GatsbyImage 
                    className="w-full mb-6 md:mb-10 xl:mb-14"
                    image={image.landscape_image.gatsbyImageData} />
            ))}    
        </>
    )
}

export default SingleLandscapeImageSlice

