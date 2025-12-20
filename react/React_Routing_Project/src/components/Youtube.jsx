import { useState } from "react";

function Youtube(){
    const[Likes,setLikes]=useState(0);
    function handlelikes(){
        setLikes(Likes+1);
    }
    return(
        <div>
            <h5>YOUTUBE</h5>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9yzQ2eHeujM?si=xnn-aLu_hkNhE4zN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button onClick={()=> handlelikes()}>{Likes}👍</button>
            <button>Share</button>
            <button>Subscribe</button>
        </div>
    );
    
}
export default Youtube;