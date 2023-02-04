import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { SearchLinkContext } from "./article";

export default function SearchResults(props){
    const[[setCallData]] = useContext(SearchLinkContext);

    return (
        <>
            <li className="mb-[10px]" style={{display: (props.hide) ? 'flex' : 'none'}} onClick={() => {setCallData(true);}}><Link to={`/blog/${props.title}`}>{props.title}</Link></li>
        </>
    )
}