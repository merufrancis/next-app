import { server } from '../config'
import ArticleList from '../components/ArticleList'
import Header from '../components/Header'

export default function Blog({ articles }) {
  return (
    <div>
      <Header />
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
    articles,
    },
  }
}

 //export const getStaticProps = async () => {
   //const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
   //const articles = await res.json()

  //return {
  //props: {
   //articles,
    //},
  //}
 //}