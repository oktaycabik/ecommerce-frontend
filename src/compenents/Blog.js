import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <h2>Blog</h2>
      <div className="post">
        <img src="featured-image.jpg" alt="Blog Post" />
        <h3>Blog Başlığı</h3>
        <p>Kısa özet...</p>
        <a href="/read-more">Daha Fazla Oku</a>
      </div>
      {/* Diğer blog yazıları */}
    </section>
  );
};

export default Blog;
