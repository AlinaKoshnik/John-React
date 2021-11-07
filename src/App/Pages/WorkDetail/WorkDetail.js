import React from "react"
import { useParams } from "react-router";
import products from "../../Main/Products/products";
import './WorkDetail.scss';
import "../../../common/style.scss";

const WorkDetail = () => {
    const { id } = useParams();
    const product = products.find(prod => {
        return prod.id === parseInt(id, 10);
    });

    if (product) {
        const { image, title, years, category, text, content } = product;

        return (
            <div className="hello-container container">
                <div className="works  WorkDetail">
                    <article key={id} className="works-item works-item-detail">
                        <div className="works-body">
                            <a href="" className="works-title">{title}</a>
                            <div className="works-info">
                                <div className="works-year works-year-detail">{years}</div>
                                <div className="works-category">{category}</div>
                            </div>
                            <div className="works-text text">{text}</div>
                        </div>
                    </article>
                    <div className="detail-content" dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </div>
        )
    } else {
        return <span>Wrong id</span>
    }
}

export default WorkDetail