import Image from 'next/image'
import styles from '../nosotros.module.css'

export const metadata = {
  title: 'GuitarLA - Nosotros',
  description: 'Sobre nosotros, guitarLA, tienda de musica',
}

export default function Nosotros() {
  return (
    <main className="contenedor">
      <h1 className="heading">Nosotros</h1>

      <div className={styles.contenido}>
        <Image src="/img/nosotros.jpg" width={1000} height={800} alt='Imagen sobre nosotros' />

        <div>
          <p>
            Nunc mollis eros massa, sed ornare lacus posuere sed. Pellentesque lacus velit, bibendum in hendrerit eget, eleifend vitae ipsum. Aenean egestas lorem et dictum suscipit. Donec non arcu odio. Curabitur sollicitudin varius eros, scelerisque porttitor sapien sagittis vitae. Aenean vel rutrum nibh. Aenean id turpis purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>
            Suspendisse facilisis orci augue, vitae tincidunt augue auctor ac. Integer vestibulum lorem eu risus dapibus dapibus. Aenean aliquam dui id viverra imperdiet. Curabitur sed mauris convallis, faucibus est eget, convallis nisi. Donec sit amet ante at magna venenatis aliquam ac sit amet odio. Etiam id urna quis enim placerat ornare id nec justo. Sed elementum dictum orci sit amet posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis congue risus eget orci volutpat interdum.
          </p>
        </div>
      </div>
    </main>
  )
}
