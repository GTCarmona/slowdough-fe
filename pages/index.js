

export default function Home({articles}) {
  console.log("articles",articles)
  return (
    <div >

      <h1>Hello World</h1>
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}