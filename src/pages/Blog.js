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
        <meta property="og:url"        content="https://huntingcoder1.netlify.app/Blog" />
        <meta property="og:type"       content="blog" />
        <meta property="og:title"      content="Hunting Coder A Place for coders to read and write a blog." />
        <meta property="og:description"content="Hunting coders a place for all the peoples whose are learning the new things that can read and write a blog." />
        <meta property="og:image"      content="https://pixabay.com/images/id-72864/" />
          {/* twitter og tag */}
          <meta name="twitter:card" content="blog" />
          <meta name="twitter:site" content="@huntingcode" />
          <meta name="twitter:creator" content="@rahulsh" />
          <meta property="og:url" content="https://huntingcoder1.netlify.app/Blog" />
          <meta property="og:title" content="blog-huntingcode" />
          <meta property="og:description" content="Hunting coders a place for all the peoples whose are learning the new things that can read and write a blog." />
          <meta property="og:image" content="https://pixabay.com/images/id-72864/" />
      
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