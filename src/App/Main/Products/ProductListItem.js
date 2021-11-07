import React from "react"
import { useHistory } from "react-router";



const ProductListItem = ( {id, image, title, years, category, text } ) => {
    const history = useHistory();
    
    function handleClick() {
        history.push(`/work/${id}`);
    }
    
    return (
        <div className="works">
            <article key={id} className="works-item">
                <a onClick={handleClick} className="works-image ibg">
                    <img src={image} alt="work #1" /></a>
                <div className="works-body">
                    <a onClick={handleClick} className="works-title">{title}</a>
                    <div className="works-info">
                        <div className="works-year">{years}</div>
                        <div className="works-category">{category}</div>
                    </div>
                    <div className="works-text text">{text}</div>
                </div>
            </article>
        </div>
    )
}

export default ProductListItem