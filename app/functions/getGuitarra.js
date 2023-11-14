const getGuitarra = async (pathname) => {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${pathname}&populate=imagen`);

  return respuesta.json();
}

export default getGuitarra
