import React from "react"
import posts from "./posts"
import PostListItem from "./PostListItem"

const PostList = () =>{
    return(
        <div className="recent-posts-container container">
                        <div className="recent-posts-header">
                            <div className="recent-posts-title title-posts title">Recent posts</div>
                            <a href="" className="recent-posts-viewall">View all</a>
                        </div>
                        <div className="recent-posts-items">
                        {
                            posts.map(({
                                id,
                                title,
                                text,
                                info
                            }) => (
                           <PostListItem 
                                key={id}
                                id={id}
                                title={title}
                                text={text}
                                info={info}
                           />
                            ))
                        }

                        </div>
                    </div>
    )
}

export default PostList


