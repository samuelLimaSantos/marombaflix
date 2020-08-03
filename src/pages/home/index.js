import React, { useEffect, useState } from "react";
import categoriasRepository from "../../repositories/categoria";
import PageDefault from "../../components/PageDefault";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import { ContainerLoading, Loading } from "./style";

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos().then((categoriasComVideos) => {
      setDadosIniciais(categoriasComVideos);
    });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      )}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={
                  "Após 10 meses de sua derrota, Caio Bottura decide voltar aos palcos e dessa vez com o apoio e companhia de grandes amigos. Esse documentário mostra o fisiculturismo de uma forma diferente, em como ele cria laços de amizades forte como ferro e vai além de um ser um esporte solitário."
                }
              />

              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
}

export default Home;
