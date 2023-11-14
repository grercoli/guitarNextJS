const getPost = async (pathname) => {
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${pathname}&populate=imagen`);

  return respuesta.json();
}

export default getPost
