import React from 'react';
import BlogArticle from './BlogArticle';
import GoBack from '../../../common/goBack/GoBack';

const Blog: React.FC = () => (
  <section className="blog">
    <div className="layout">
      <div className="top-controls">
        <GoBack />
      </div>
      <BlogArticle />
    </div>
  </section>
);
export default Blog;
