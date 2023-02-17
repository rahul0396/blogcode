import React from 'react'
import Script from 'next/script'
import Head from 'next/head'
import styles from '../style/aboutus.module.css'

const About = () => {
  return (
    <>
    <Head>
      <title>AboutUs</title>
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
    <Script src='scriptapp.js '></Script>
    <div className={styles.container}>
      <h1 >About Hunting Coders</h1>
      <h3>Introduction</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe totam recusandae eos labore beatae exercitationem aperiam voluptatum earum accusantium nesciunt incidunt dolorum vel ipsam sit, rerum laboriosam eligendi consectetur deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa, temporibus rem, minima eveniet quidem, facilis aliquid voluptas vero debitis accusantium expedita? Recusandae neque sed ab inventore, aut enim facilis.</p>
      <h3>Serviced Offered</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio unde error excepturi, mollitia cumque in placeat doloribus nemo ex, sunt ratione veritatis exercitationem totam nostrum delectus at quas pariatur! Distinctio?</p>
      <p>we offered the following services</p>
      <ul>
        <li>Service1</li>
        <li>Service2</li>
        <li>Service1</li>
        <li>Service1</li>
        <li>Service1</li>
        <li>Service1</li>
        <li>Service1</li>
        <li>Service1</li>
      </ul>
      <h3>Contact us</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ipsam debitis tempora nobis illum natus maiores repellendus iusto soluta ad impedit temporibus nulla similique ratione amet molestias, quisquam placeat labore odit. Tempore, laudantium? Officia et eos dolore atque, ducimus quae! Officiis voluptatum recusandae nisi in explicabo repellat, facilis incidunt aliquid.</p>

    </div>
    </>
  )
}

export default About