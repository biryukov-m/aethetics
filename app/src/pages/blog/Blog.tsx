import React from "react";
import { useParams } from "react-router-dom";
import BlogArticle from "./BlogArticle";
import GoBack from "../../components/goBack/GoBack";

const Blog: React.FC = () => {
  const { id } = useParams();
  return (
    <section className="blog">
      <div className="layout">
        <div className="top-controls">
          <GoBack />
        </div>
        <BlogArticle />
      </div>
    </section>
  );
};
export default Blog;
