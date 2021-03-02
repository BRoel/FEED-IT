import React from 'react'
import {Route, Link} from 'react-router-dom';
import Post from './Post';

const Posts = (props) => {

    // if (!props.posts){return(<div></div>)}

    return (

        <div>
            {props.posts.map(post =>  //interating over all posts
                <ul key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </ul>
                //created link for each account using interpolation
            )}
        </div>

    )

}

export default Posts