import React from "react"
import PostList from "../Main/Posts/PostList"
import ProductList from "../Main/Products/ProductList"

const Main = () => {
    return (
         <main className="page">
                <section className="hello">
                    <div className="hello-container container">
                        <div className="hello-content">
                            <h1 className="hello-title title">Hi, I am John, <br /> Creative Technologist</h1>
                            <div className="hello-text text">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                   </div>
                            <a href="" className="hello-btn btn">Download Resume</a>
                        </div>
                        <div className="hello-avatar">
                            <img className="hello-avatar" src="img/John_face.png" alt="" />
                        </div>
                    </div>
                </section>
                <PostList/>
                <ProductList/>
            </main>
    )
}

export default Main