import React from 'react'
import articleData from '../../../../public/content/article.json'
import styles from './ArticleContent.module.css'



const ArticleContent: React.FC = () => {
const data: any = articleData;
  return (
    <div>
        <section className={styles.ArticleContent}>
      <h1> {articleData.pageProps.items.title}</h1> 
      <p> {articleData.pageProps.items.description}</p>     
          <h2>{articleData.pageProps.items.content[0].fields.internal}</h2>
          <p>Sometimes, having more than one person working on a task can get the job done much quicker. Assigning actions to users and groups allows the team to fulfill projects or maintenance tasks faster within the organization.</p>
           <h2> {articleData.pageProps.items.content[3].fields.header}</h2> 
            </section>
    </div>
  )
}

export default ArticleContent
