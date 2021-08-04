import * as React from "react";

function WorkFilterListItem(props) {
    return (
        <li>
            <button 
                id={props.category} 
                className={"underline " + ((props.category === props.activeCategory) ? "text-ds-orange" : null) }
                onClick={props.clickHandler}>
                    {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
            </button>
        </li>
    )
}

export default WorkFilterListItem