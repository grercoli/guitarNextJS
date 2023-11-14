const getPosts = async () => {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);

  return respuesta.json();
}

export default getPosts
