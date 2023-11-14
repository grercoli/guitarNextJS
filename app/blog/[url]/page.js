import Image from "next/image"
import getPost from "../../functions/getPost"
import styles from "../../blog.module.css"
import { formatearFecha } from "../../utils/helpers"

export async function generateMetadata({ params }, parent) {
  const post = await getPost(params.url);

  const datosPost = post.data.reduce((acum, current) => {
    return {
      ...current
    }
  }, {})
 
  return {
    title: `GuitarLA - ${datosPost.attributes.titulo}`,
    description: 'Tienda virtual, venta de guitarras, instrumentos, GuitarLA'
  }
}

const Post = async ({ params }) => {
  const post = await getPost(params.url);

  const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes;

  return (
    <article className={`${styles.post} ${styles["mt-3"]}`}>
      <Image src={imagen.data.attributes.url} width={1000} height={600} alt={`imagen blog ${titulo}`} />

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.texto}>{contenido}</p>
      </div>
    </article>
  )
}

export default Post
