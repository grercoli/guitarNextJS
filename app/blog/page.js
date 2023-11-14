import getPosts from "../functions/getPosts"
import Post from "../components/post"
import styles from "../grid.module.css"

export const metadata = {
  title: 'GuitarLA - Blog',
  description: 'Blog de musica, venta de guitarras, consejos, GuitarLA',
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main className="contenedor">
      <h1 className="heading">Blog</h1>

      <div className={styles.grid}>
        {posts.data.map(post => <Post key={post.id} post={post.attributes} />)}
      </div>
    </main>
  )
}
