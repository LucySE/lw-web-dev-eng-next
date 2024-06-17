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
            {articleData.pageProps.items.content[3].fields.header}
            </section>
    </div>
  )
}

export default ArticleContent
