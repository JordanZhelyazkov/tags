import React, { useState } from 'react';



const Tags = (props) => {
    const [tagsArr, arr] = useState(props);
    const tagsNew = tagsArr.tags;
    const listItems = tagsNew.map((tag) => 
        <li className="tag">#{tag}</li>);
    return (
        <div className="tags">
            {listItems}
            </div>
    )
}
export default Tags;    
        
