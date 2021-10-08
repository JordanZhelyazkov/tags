import { render } from "react-dom";
import React from "react";


const Tags = (props) => {
    const tagsNew = props.tags;
    const listItems = tagsNew.map((tag) => 
        <li className="tag">#{tag}</li>);
    return (
        <div className="tags">
            {listItems}
            </div>
    )
}
export default Tags;    
        
