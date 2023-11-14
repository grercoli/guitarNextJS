import Image from "next/image";
import getGuitarra from "../../functions/getGuitarra"
import styles from "../../guitarras.module.css"

export async function generateMetadata({ params }, parent) {
  const guitar = await getGuitarra(params.url);

  const datosGuitarra = guitar.data.reduce((acum, current) => {
    return {
      ...current
    }
  }, {})
 
  return {
    title: `GuitarLA - Guitarra ${datosGuitarra.attributes.nombre}`,
    description: 'Tienda virtual, venta de guitarras, instrumentos, GuitarLA'
  }
}

const Producto = async ({ params }) => {
  const guitar = await getGuitarra(params.url);

  const datosGuitarra = guitar.data.reduce((acum, current) => {
    return {
      ...current
    }
  }, {})

  const { descripcion, imagen, nombre, precio } = datosGuitarra.attributes;

  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>{precio}</p>
      </div>
    </div>
  )
}

export default Producto
