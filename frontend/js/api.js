async function api(endpoint) {
  try {
    const resposta = await fetch(`http://localhost:3000/${endpoint}`);
    const dados = resposta.json();
    return dados;
  } catch (error) {
    console.error(error);
    alert("Algo deu errado");
  }
}

export default api;
