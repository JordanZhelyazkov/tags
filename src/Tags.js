import { render } from "react-dom";


const Tags = () => {
    const arrStrings = ['boomdotdev', 'task', 'tags', 'react'];
    const arrStrList = arrStrings.map(tag => <li className="tag">#{tag}</li>);
         return <div className="tags">{arrStrList}</div>;
}
export default Tags;    
        
