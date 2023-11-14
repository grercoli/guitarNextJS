import Guitarra from "../components/guitarra"
import getGuitarras from "../functions/getGuitarras"
import styles from "../grid.module.css"

export const metadata = {
  title: 'GuitarLA - Tienda Virtual',
  description: 'Tienda virtual, venta de guitarras, instrumentos, GuitarLA',
}

export default async function Tienda() {
  const guitars = await getGuitarras();

  return (
    <main className="contenedor">
      <h1 className="heading">Nuestra Coleccion</h1>

      <div className={styles.grid}>
        {guitars.data.map(guitar => <Guitarra key={guitar.id} guitarra={guitar.attributes} />)}
      </div>
    </main>
  )
}
