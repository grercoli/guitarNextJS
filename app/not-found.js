import Link from "next/link"

export const metadata = {
  title: 'GuitarLA - Pagina no encontrada',
  description: 'Tienda virtual, venta de guitarras, instrumentos, GuitarLA',
}

const Pagina404 = () => {
  return (
    <div>
      <p className="error">Pagina no encontrada</p>
      <Link href="/" className="error-enlace">Ir a inicio</Link>
    </div>
  )
}

export default Pagina404
