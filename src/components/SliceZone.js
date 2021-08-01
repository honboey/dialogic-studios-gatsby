import * as React from "react"
import TextSlice from "./TextSlice"
import SingleLandscapeImageSlice from "./SingleLandscapeImageSlice"

function SliceZone({ slices }) {
    const sliceComponents = {
        imagery_single_landscape: SingleLandscapeImageSlice,
        text: TextSlice
    }
    return slices.map((slice, index) => {
        const SliceComponent = sliceComponents[slice.slice_type]
        if (SliceComponent) {
            return <SliceComponent slice={slice} key={`slice-${index}`} />
        }
        return null
    })
}

export default SliceZone
