import { useState } from "react";

function Like() {

    const [like,setLike] =useState(false);

    return ( 
        <button onClick={()=> setLike(!like)}>
    <i className={like ? "fa-solid fa-heart" :"fa-regular fa-heart"}></i>
    </button>


     );
}

export default Like;