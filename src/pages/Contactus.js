import React from 'react'
import styles from '../style/contact.module.css';
import Head from 'next/head';

const Contactus = () => {
  return (<>
  
    <Head>
      
      
      <title>Contact us</title>

                  {/* facebook og tag */}
                  <meta property="og:url"        content="https://getblog2.netlify.app/blog" />
        <meta property="og:type"       content="blog" />
        <meta property="og:title"      content="Hunting Coder A Place for coders to read and write a blog." />
        <meta property="og:description"content="Hunting coders a place for all the peoples whose are learning the new things that can read and write a blog." />
        <meta property="og:image"      content="https://picsum.photos/200" />
          {/* twitter og tag */}
          <meta name="twitter:card" content="blog" />
          <meta name="twitter:site" content="@huntingcode" />
          <meta name="twitter:creator" content="@rahulsh" />
          <meta property="og:url" content="https://getblog2.netlify.app/blog" />
          <meta property="og:title" content="blog-huntingcode" />
          <meta property="og:description" content="Hunting coders a place for all the peoples whose are learning the new things that can read and write a blog." />
          <meta property="og:image" content="https://picsum.photos/200" />
    </Head>
    <div className={styles.container}>
      <h1>Contact US</h1>

      <div className={styles.inputcontainer}>
      <label htmlFor="">Enter Your Name</label>
      <input type="text" />
      </div>

      <div className="input-container">
      <label htmlFor="">Email address</label>
      <input type="text" />
      </div>

      <div className="input-container">
      <label htmlFor="">Phone </label>
      <input type="text" />
      </div>

      <div className="input-container">
      <label htmlFor="">Elaborate your concern</label>
      <input type="text" />
      </div>
      <button className="submit-btn">Submit</button>

    </div>
    </>
  )
}

export default Contactus