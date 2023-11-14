import styles from "../curso.module.css"

const Curso = ({ curso }) => {
  const { contenido, imagen, titulo } = curso;

  return (
    <section className={styles.curso} style={{ backgroundImage: `linear-gradient(to right, rgb(0, 0, 0, 0.65), rgb(0, 0, 0, 0.7)), url(${imagen.data.attributes.url})` }}>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p>{contenido}</p>
        </div>
      </div>
    </section>
  )
}

export default Curso
