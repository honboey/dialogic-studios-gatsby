import * as React from "react";
import "../styles/global.css";
import { GatsbyImage } from "gatsby-plugin-image";

function ImageRowSlice(props) {
    console.log(props)
    return (
        <div class="lg:flex lg:justify-between">
            {props.slice.items.map((image, index) => (
                <GatsbyImage 
                    key={index}
                    className="lg:w-1/2 lg:mr-4 mb-6 md:mb-10 xl:mb-14"
                    image={image.image_row.gatsbyImageData}
                    alt={image.image_row.alt} />
            ))}    
        </div>
    )
}

export default ImageRowSlice

