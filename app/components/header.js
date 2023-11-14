'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../header.module.css'

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/">
          <Image
            src="/img/logo.svg"
            width={300}
            height={40}
            alt="imagen logotipo"
          />
        </Link>

        <nav className={styles.navegacion}>
          <Link className={pathname === "/" ? styles.active : ""} href="/">Inicio</Link>
          <Link className={pathname === "/nosotros" ? styles.active : ""} href="/nosotros">Nosotros</Link>
          <Link className={pathname === "/blog" ? styles.active : ""} href="/blog">Blog</Link>
          <Link className={pathname === "/tienda" ? styles.active : ""} href="/tienda">Tienda</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
