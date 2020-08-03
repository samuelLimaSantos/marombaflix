import axios from "axios";
import config from "../config/index";
const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

const getAllWithVideos = async () => {
  const promisse = await axios.get(`${URL_CATEGORIES}?_embed=videos`);
  const datas = promisse.data;
  return datas;
};

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error("Não foi possível pegar os dados :(");
  });
}

export default {
  getAll,
  getAllWithVideos,
};
