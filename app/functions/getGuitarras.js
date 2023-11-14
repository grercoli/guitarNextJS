const getGuitarras = async () => {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);

  return respuesta.json();
}

export default getGuitarras
