import * as React from "react";
import { RichText } from "prismic-reactjs";
import htmlSerializerProjects from "../utils/htmlSerializerProjects"

import "../styles/global.css";

function TextSlice(props) {
    return (
        <div className="flex justify-end">
            <div className="md:w-5/12 lg:w-1/2"></div>
            <div className="md:w-7/12 lg:w-1/2">
                <RichText htmlSerializer={htmlSerializerProjects} render={props.slice.items[0].text.raw} />
            </div>    
        </div>
    )
}

export default TextSlice