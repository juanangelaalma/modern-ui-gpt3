import React from "react";

import { Article } from "../../components";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__margin">
      <div className="gpt3__blog-header gradient__text">
        <h1>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <Article
          image={require("../../assets/blog01.png")}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <Article
          image={require("../../assets/blog02.png")}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <Article
          image={require("../../assets/blog03.png")}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <Article
          image={require("../../assets/blog04.png")}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <Article
          image={require("../../assets/blog05.png")}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
      </div>
    </div>
  );
};

export default Blog;
