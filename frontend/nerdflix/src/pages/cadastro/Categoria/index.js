import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

const CadastroCateogria = () => {
  const initialValues = {
    name: "",
    description: "",
    color: "",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  const setValue = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const handleChange = ({ target }) => {
    setValue(target.getAttribute("name"), target.value);
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: </h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setCategorias([...categorias, values]);

          setValues(initialValues);
        }}
      >
        <div>
          <FormField
            value={values.name}
            change={handleChange}
            name="name"
            type="text"
            title="Nome da Categoria: "
          />
        </div>
        <div>
          <FormField
            value={values.description}
            change={handleChange}
            name="description"
            type="textarea"
            title="Descrição: "
          />
        </div>
        <div>
          <FormField
            value={values.color}
            change={handleChange}
            name="color"
            type="color"
            title="Cor: "
          />
        </div>

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((category, index) => (
          <li key={index}>{category.name}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};

export default CadastroCateogria;
