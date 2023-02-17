import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../style/blogPost.module.css'

const slug = () => {
    // const router = useRouter();
    // const {slug}=(router.query);
  return (
    <div className={styles.container}>
      {/* <h1>Title of the Page {slug}</h1> */}
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, provident?</div>
    </div>
  )
}

export default slug;