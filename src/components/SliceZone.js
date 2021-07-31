import * as React from "react"

function SliceZone({ slices }) {
    return slices.map((slice, index) => {
        return (
            <p key={index}>{slice.slice_type}</p>
        )
    })
}

export default SliceZone
