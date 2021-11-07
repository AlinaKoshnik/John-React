import React from "react"


const PostListItem = ({id, title, text, info}) => {
    return (
        <>
            <div key={id} className="recent-posts-colomn">
                <article className="recent-post recent-posts-item"> 
                    <a className="recent-post-title">{title}</a>
                    <div className="recent-post-info">{info}</div>
                    <div className="recent-post-text text">{text}</div>
                </article>
            </div>
        </>
    )
}

export default PostListItem



