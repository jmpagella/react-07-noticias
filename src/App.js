import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // Definir la categoria
  const [ categoria, guardarCategoria ] = useState('');
  // Definir las noticias
  const [ noticias, guardarNoticias ] = useState([]);

  // Consulta a la API cada vez que cambia la categoria
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=801a0c906d1945f5a4b90b968cc96903`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);
  // 

  return (
    <Fragment>
      <Header
        titulo="Buscador de Noticias"
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>

    </Fragment>
  );
}

export default App;
