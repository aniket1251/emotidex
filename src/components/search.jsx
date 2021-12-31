import React from "react";

const Search = (props)=>{
    return(
        <div className = "search">
            <input className="field" type="text" placeholder={props.placeholder} onChange={props.hC}></input>
        </div>
        
    )
}

export default Search;