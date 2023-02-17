import React from 'react';
// import styles from "../app/page.module.css";
import styles from '../style/blog.module.css'
import Head from 'next/head'

const Blog = () => {
  fetch('../blogdata/how-to-learn-javascript')
  .then(res=>res.json())
  .then(data=> console.log(data))
  return (
  <>
  <Head>
      <title>Blog</title>
    
      
      {/* facebook og tag */}
              <meta property="og:url"        content="https://getblog2.netlify.app/Blog" />
              <meta property="og:type"       content="blog" />
              <meta property="og:title"      content="blog page" />
              <meta property="og:description"content="Blog Page Desc" />
              <meta property="og:image"      content="https://picsum.photos/200" />
          {/* twitter og tag */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@getblogs" />
          <meta name="twitter:creator" content="@rahulsh" />
          <meta name="twitter:title" content="blog page"/>
          <meta name="twitter:description" content="blogPAge- getblog"/>
          <meta property="og:url" content="https://getblog2.netlify.app/Blog" />
          <meta property="og:title" content="blogPage-getblogs" />
          <meta property="og:description" content="BlogPage Description" />
          <meta property="og:image" content="https://picsum.photos/200" />
    </Head>
  <main className={styles.main}>
    
  
    <div className={styles.card_box}>
          <h2>Blog Post</h2>
          <div className={styles.card}>
            <h4>Blog Title</h4>
            <p>
              Blog:Decrption: Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Amet, libero!
            </p>
          </div>
          <div className={styles.card}>
            <h4>Blog Title</h4>
            <p>
              Blog:Decrption: Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Amet, libero!
            </p>
          </div>
          <div className={styles.card}>
            <h4>Blog Title</h4>
            <p>
              Blog:Decrption: Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Amet, libero!
            </p>
          </div>
          <div className={styles.card}>
            <h4>Blog Title</h4>
            <p>
              Blog:Decrption: this the blog description in which the 
              blog person give their blog data so that they can explain 
              the 
            </p>
          </div>
          <div className={styles.card}>
            <h4>Blog Title</h4>
            <p>
              Blog:Decrption: Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Amet, libero!
            </p>
          </div>
          <div className={styles.card}>
            <h4>Blog Title</h4>
            <p>
              Blog:Decrption: Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Amet, libero!
            </p>
          </div>
        </div>
        </main>
        </>
  )
}

export default Blog