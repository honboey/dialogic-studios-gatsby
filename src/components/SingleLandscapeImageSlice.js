import * as React from "react";
import "../styles/global.css";
import { GatsbyImage } from "gatsby-plugin-image";

function SingleLandscapeImageSlice(props) {
    return (
        <>
            {props.slice.items.map((image, index) => (
                <GatsbyImage 
                    key={index}
                    className="w-full mb-6 md:mb-10 xl:mb-14"
                    image={image.landscape_image.gatsbyImageData}
                    alt={image.landscape_image.alt} />
            ))}    
        </>
    )
}

export default SingleLandscapeImageSlice

